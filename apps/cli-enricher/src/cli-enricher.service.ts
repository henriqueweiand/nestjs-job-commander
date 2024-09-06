import { Injectable } from '@nestjs/common';

import { Providers } from '@app/providers/providers.interface';
import { EventService } from '@app/event';

@Injectable()
export class CliEnricherService {
  constructor(
    private readonly ticketmasterProvider: Providers,
    private readonly eventService: EventService
  ) {

  }

  async run(): Promise<string> {
    const data = await this.ticketmasterProvider.getData();
    const event = await this.eventService.create();

    console.info(data);
    console.info(event);

    return 'Hello World!';
  }
}
