import { Injectable } from '@nestjs/common';

@Injectable()
export class AppHelloService {
  getResponse(): string {
    return 'Hello | Hola | Oi -> World!!';
  }
}
