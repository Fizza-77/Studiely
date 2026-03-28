import fs from 'fs';
import path from 'path';

export default function TermsOfService() {
  const filePath = path.join(
    process.cwd(),
    'app/terms-of-service/V1.4_Terms_of_Service_Studiely.html'
  );
  const html = fs.readFileSync(filePath, 'utf-8');

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
