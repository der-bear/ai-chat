import React, { useState, useRef } from 'react';

interface FileUploadProps {
  onFileUpload: (file: File, content: string) => void;
  accept?: string;
  maxSize?: number;
}

export const FileUpload: React.FC<FileUploadProps> = ({
  onFileUpload,
  accept = '.pdf,.doc,.docx,.txt,.json,.xml,.csv,.xlsx,.xls',
  maxSize = 5 * 1024 * 1024 // 5MB default
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileSelection(files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileSelection(files[0]);
    }
  };

  const handleFileSelection = async (file: File) => {
    if (file.size > maxSize) {
      alert(`File too large. Maximum size is ${maxSize / 1024 / 1024}MB`);
      return;
    }

    setIsProcessing(true);
    
    try {
      const content = await readFileContent(file);
      onFileUpload(file, content);
    } catch (error) {
      alert('Error reading file. Please try a different format.');
    } finally {
      setIsProcessing(false);
    }
  };

  const readFileContent = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      
      reader.onload = (e) => {
        const result = e.target?.result as string;
        resolve(result);
      };
      
      reader.onerror = () => reject(new Error('Failed to read file'));
      
      // Handle different file types
      if (file.type === 'application/json' || file.name.endsWith('.json')) {
        reader.readAsText(file);
      } else if (file.type.includes('text') || file.name.endsWith('.txt') || file.name.endsWith('.csv')) {
        reader.readAsText(file);
      } else {
        // For binary files (PDF, DOC, etc.), we'll read as text for demo purposes
        // In a real implementation, you'd use specific parsers
        reader.readAsText(file);
      }
    });
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="file-upload">
      <div 
        className={`file-upload__dropzone ${isDragging ? 'file-upload__dropzone--dragging' : ''} ${isProcessing ? 'file-upload__dropzone--processing' : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleBrowseClick}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          onChange={handleFileInput}
          style={{ display: 'none' }}
        />
        
        {isProcessing ? (
          <div className="file-upload__processing">
            <div className="file-upload__spinner"></div>
            <p>Processing file...</p>
          </div>
        ) : (
          <div className="file-upload__content">
            <div className="file-upload__icon">
              <i className="cil-cloud-upload"></i>
            </div>
            <p>Drag & drop files here or click to browse</p>
            <div className="file-upload__formats">
              <small>Supported formats: CSV, JSON, XLS</small>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUpload;