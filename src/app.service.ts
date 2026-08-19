import { Injectable, StreamableFile } from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from 'path';

@Injectable()
export class AppService {
  upTime(): string {
    return 'API Server UP!';
  }
  

    getHansApiDocs(): StreamableFile {
    const file = createReadStream(join(process.cwd(), '../', 'hans-api-doc.html'));
    return new StreamableFile(file, {
      type: 'text/html', // ensures browser renders instead of downloading
      disposition: '',    // prevents Content-Disposition attachment behavior
    });
  }
}
