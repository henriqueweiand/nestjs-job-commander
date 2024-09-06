import { Module } from '@nestjs/common';
import { CliEnricherController } from './cli-enricher.controller';
import { CliEnricherService } from './cli-enricher.service';

@Module({
  imports: [],
  controllers: [CliEnricherController],
  providers: [CliEnricherService],
})
export class CliEnricherModule {}
