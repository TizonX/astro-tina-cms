// src/utils/getContent.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getContent(filePath) {
  const fullPath = path.join(process.cwd(), filePath);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return { data, content };
}
