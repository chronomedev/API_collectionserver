import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  upTime(): string {
    return 'API Server UP!';
  }
}
