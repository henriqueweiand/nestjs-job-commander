import { Controller, Get } from '@nestjs/common';
import { CliEnricherService } from './cli-enricher.service';

@Controller()
export class CliEnricherController {
  constructor(private readonly cliEnricherService: CliEnricherService) {}

  @Get()
  getHello(): string {
    return this.cliEnricherService.getHello();
  }
}
