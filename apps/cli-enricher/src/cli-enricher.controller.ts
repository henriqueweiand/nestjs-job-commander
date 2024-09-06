import { Controller, Get } from '@nestjs/common';
import { CliEnricherService } from './cli-enricher.service';

@Controller()
export class CliEnricherController {
  constructor(private readonly cliEnricherService: CliEnricherService) { }

  @Get()
  run(): string {
    return this.cliEnricherService.run();
  }
}
