import { NestFactory } from '@nestjs/core';
import { CliEnricherModule } from './cli-enricher.module';

async function bootstrap() {
  const app = await NestFactory.create(CliEnricherModule);
  await app.listen(3000);
}
bootstrap();
