import { Controller, Get, HttpException } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  index(): string {
    return this.appService.upTime();
  }

  @Get('hans-API')
  async getDocumentationUI() {
    try {
      return this.appService.getHansApiDocs();
    } catch (error) {
      throw new HttpException(error, 422);
    }
  }
}
