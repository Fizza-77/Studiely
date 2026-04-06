import fs from 'fs';
import path from 'path';

export default function CookiePolicy() {
  const filePath = path.join(process.cwd(), 'legal/studiely-cookie-policy.html');
  const html = fs.readFileSync(filePath, 'utf-8');

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
