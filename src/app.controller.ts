import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {

  @Get()
  getHomePage() {
    return 'hi'
  }
}
