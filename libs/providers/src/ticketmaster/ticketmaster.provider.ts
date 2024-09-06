import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';

import { Providers } from '@app/providers/providers.interface';
import { TicketmasterConfig } from './ticketmaster.config';

@Injectable()
export class TicketmasterProvider extends Providers {
  constructor(
    @Inject(TicketmasterConfig.KEY)
    private readonly ticketmasterConfig: ConfigType<typeof TicketmasterConfig>,
  ) {
    super();
  }

  async getData(): Promise<boolean> {
    return true;
  }
}
