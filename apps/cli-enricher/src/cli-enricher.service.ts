import { Injectable } from '@nestjs/common';

@Injectable()
export class CliEnricherService {
  getHello(): string {
    return 'Hello World!';
  }
}
