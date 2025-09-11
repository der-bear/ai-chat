import OpenAI from 'openai';

export type RagChunk = {
  id: string;
  source: string;
  text: string;
  embedding: number[];
};

export class RagService {
  private index: RagChunk[] = [];
  private client: OpenAI | null = null;

  constructor(apiKey?: string) {
    if (apiKey) {
      this.client = new OpenAI({ apiKey, dangerouslyAllowBrowser: true });
    }
  }

  // Load a prebuilt index file (bundled in the project) via dynamic import.
  async loadIndexFromBundle(): Promise<void> {
    try {
      // Attempt to import the JSON index if it exists
      // This will work in Vite dev/build and Node if the file is present
      // Use dynamic import but guard with try/catch in case file missing
      const mod: any = await import('../data/rag-index.json');
      const rawAny: any = (mod && 'default' in mod) ? mod.default : mod;
      if (!Array.isArray(rawAny)) {
        this.index = [];
        return;
      }
      type IndexItem = { id?: string; source?: string; sourcePath?: string; text?: string; chunk?: string; embedding?: number[] };
      const arr = rawAny as IndexItem[];
      this.index = arr.map((item, i) => ({
        id: (item && item.id) ? String(item.id) : `chunk_${i}`,
        source: (item && (item.source || item.sourcePath)) ? String(item.source || item.sourcePath) : 'unknown',
        text: (item && (item.text || item.chunk)) ? String(item.text || item.chunk) : '',
        embedding: (item && Array.isArray(item.embedding)) ? (item.embedding as number[]) : []
      }));
    } catch (err) {
      try {
        // Try fallback empty index
        const fallbackMod: any = await import('../data/rag-index-fallback.json');
        this.index = [];
        console.warn('RAG: using fallback (empty) index, main RAG build may have failed.');
      } catch (fallbackErr) {
        console.warn('RAG: no bundled index found, operating without RAG context.', err);
        this.index = [];
      }
    }
  }

  // Compute embedding for query and return top-K chunks for the given agent type
  async queryTopK(query: string, k = 5, agentType?: 'tools' | 'documentation' | 'schema'): Promise<RagChunk[]> {
    if (!this.client) {
      throw new Error('RagService: OpenAI API key not provided to compute query embeddings at runtime.');
    }

    // If no index loaded, return empty
    if (!this.index || this.index.length === 0) {
      return [];
    }

    // Create query embedding
    const embResp = await this.client.embeddings.create({
      model: 'text-embedding-3-small',
      input: query
    });

    const qVec = embResp.data[0].embedding as number[];

    // Compute cosine similarity against stored index
    const scored = this.index.map(chunk => {
      const score = cosineSimilarity(qVec, chunk.embedding || []);
      return { chunk, score };
    });

    // Optionally prioritize by source (tools -> client-create-flow, docs -> knowledgebase)
    if (agentType) {
      const preferred = agentType === 'tools'
        ? 'client-create-flow'
        : agentType === 'schema'
          ? 'delivery-api'
          : 'knowledgebase';
      scored.sort((a, b) => {
        const aPref = a.chunk.source.includes(preferred) ? 1 : 0;
        const bPref = b.chunk.source.includes(preferred) ? 1 : 0;
        if (aPref !== bPref) return bPref - aPref; // prefer preferred source first
        return b.score - a.score;
      });
    } else {
      scored.sort((a, b) => b.score - a.score);
    }

    return scored.slice(0, k).map(s => s.chunk);
  }
}

function dot(a: number[], b: number[]) {
  let s = 0;
  for (let i = 0; i < Math.min(a.length, b.length); i++) s += a[i] * b[i];
  return s;
}

function magnitude(a: number[]) {
  let s = 0;
  for (let i = 0; i < a.length; i++) s += a[i] * a[i];
  return Math.sqrt(s);
}

function cosineSimilarity(a: number[], b: number[]) {
  if (!a || !b || a.length === 0 || b.length === 0) return 0;
  return dot(a, b) / (magnitude(a) * magnitude(b));
}
