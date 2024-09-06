import { Module } from '@nestjs/common';

import { EnvModule } from '@app/env';
import { PersistenceModule } from '@app/persistence';
import { ProvidersModule, TicketmasterModule } from '@app/providers';

import { CliEnricherController } from './cli-enricher.controller';
import { CliEnricherService } from './cli-enricher.service';

const app = 'CLI-ENRICHER';

@Module({
  imports: [
    EnvModule.register(app),
    PersistenceModule.registerTypeOrm(app),
    ProvidersModule.with(TicketmasterModule),
  ],
  controllers: [CliEnricherController],
  providers: [CliEnricherService],
})
export class CliEnricherModule { }
