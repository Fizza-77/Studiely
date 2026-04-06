import fs from 'fs';
import path from 'path';

export default function AcceptableUsePolicy() {
  const filePath = path.join(
    process.cwd(),
    'legal/studiely-acceptable-use-policy.html'
  );
  const html = fs.readFileSync(filePath, 'utf-8');

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
