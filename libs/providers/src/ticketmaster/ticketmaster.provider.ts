import { Injectable } from '@nestjs/common';

import { Event } from '@app/event/entities/event.entity';
import { Providers } from '@app/providers/providers.interface';
import { TicketmasterHttpService } from './ticketmaster/ticketmaster_http.service';
import { TicketmasterTransformer } from './ticketmaster.transformer';

@Injectable()
export class TicketmasterProvider extends Providers {
  constructor(
    private readonly ticketmasterHttpService: TicketmasterHttpService,
    private readonly ticketmasterTransformer: TicketmasterTransformer,
  ) {
    super();
  }

  async getEvents(): Promise<Event[]> {
    const events = await this.ticketmasterHttpService.eventSearch();

    return events.data._embedded.events.map(event => this.ticketmasterTransformer.transformEvent(event));
  }
}
