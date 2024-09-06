import { Controller, Get } from '@nestjs/common';
import { CliEnricherService } from './cli-enricher.service';

@Controller()
export class CliEnricherController {
  constructor(private readonly cliEnricherService: CliEnricherService) { }

  @Get()
  async run() {
    return await this.cliEnricherService.run();
  }
}
