import { Controller, Get }   from '@nestjs/common';
import { AppHelloService }   from '../services';

@Controller("hello")
export class AppController {
  constructor(private readonly appService: AppHelloService ) {}

  @Get()
  getHello(): string {
    return this.appService.getResponse();
  }
}
