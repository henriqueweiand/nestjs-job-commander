import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';

import { CliEnricherModule } from './cli-enricher.module';

async function bootstrap() {
  const app = await NestFactory.create(CliEnricherModule);

  const envs = app.get(ConfigService);
  await app.listen(envs.getOrThrow('APP.PORT'));
}
bootstrap();
