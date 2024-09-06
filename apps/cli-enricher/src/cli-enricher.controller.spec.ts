import { Test, TestingModule } from '@nestjs/testing';
import { CliEnricherController } from './cli-enricher.controller';
import { CliEnricherService } from './cli-enricher.service';

describe('CliEnricherController', () => {
  let cliEnricherController: CliEnricherController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CliEnricherController],
      providers: [CliEnricherService],
    }).compile();

    cliEnricherController = app.get<CliEnricherController>(CliEnricherController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(cliEnricherController.getHello()).toBe('Hello World!');
    });
  });
});
