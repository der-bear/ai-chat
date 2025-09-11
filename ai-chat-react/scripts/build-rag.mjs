#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import OpenAI from 'openai';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const DATA_DIR = path.join(ROOT, 'src', 'data');
const INDEX_PATH = path.join(DATA_DIR, 'rag-index.json');
const FILES = [
  { file: 'client-create-flow.md', source: 'client-create-flow' },
  { file: 'knowledgebase.md', source: 'knowledgebase' },
  // Added as reference-only schema; keep chunk count modest
  { file: 'delivery-api.md', source: 'delivery-api' }
];

const API_KEY = process.env.OPENAI_API_KEY || process.env.VITE_OPENAI_API_KEY;
if (!API_KEY) {
  console.error('Missing OPENAI_API_KEY. Set it in your environment.');
  process.exit(1);
}

const client = new OpenAI({ apiKey: API_KEY });

function chunkText(text, maxLen = 3500, overlap = 400) {
  // Rough char-based chunking; good enough for dev. Adjust as needed.
  const chunks = [];
  let i = 0;
  while (i < text.length) {
    const end = Math.min(text.length, i + maxLen);
    const slice = text.slice(i, end);
    chunks.push(slice);
    if (end >= text.length) break;
    i = end - overlap;
    if (i < 0) i = 0;
  }
  return chunks;
}

async function embedChunks(chunks) {
  const resp = await client.embeddings.create({
    model: 'text-embedding-3-small',
    input: chunks
  });
  return resp.data.map(d => d.embedding);
}

async function build() {
  const index = [];
  for (const { file, source } of FILES) {
    const p = path.join(DATA_DIR, file);
    if (!fs.existsSync(p)) {
      console.warn(`Skip missing file: ${p}`);
      continue;
    }
    const raw = fs.readFileSync(p, 'utf8');
    const chunks = chunkText(raw);
    console.log(`Embedding ${chunks.length} chunks for ${source}...`);
    const embeddings = await embedChunks(chunks);
    chunks.forEach((text, i) => {
      index.push({
        id: `${source}_${i}`,
        source,
        text,
        embedding: embeddings[i]
      });
    });
  }

  fs.writeFileSync(INDEX_PATH, JSON.stringify(index, null, 2));
  console.log(`Wrote index with ${index.length} chunks to ${INDEX_PATH}`);
}

build().catch(err => {
  console.error('RAG index build failed:', err);
  process.exit(1);
});
