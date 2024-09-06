import { Injectable } from '@nestjs/common';
import { Providers } from '@app/providers/providers.interface';

@Injectable()
export class CliEnricherService {
  constructor(
    private readonly TicketmasterProvider: Providers
  ) {

  }

  run(): string {
    const data = this.TicketmasterProvider.getData();
    console.info(data);

    return 'Hello World!';
  }
}
