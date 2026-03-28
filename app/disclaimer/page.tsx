import fs from 'fs';
import path from 'path';

export default function Disclaimer() {
  const filePath = path.join(process.cwd(), 'app/disclaimer/studiely-disclaimer.html');
  const html = fs.readFileSync(filePath, 'utf-8');

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
