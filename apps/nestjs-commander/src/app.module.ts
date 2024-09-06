import { Module } from '@nestjs/common';

import { CliCommand } from './cli-command';
import { SubCommandTestModule } from './sub-command-test/sub_command_test.module';

@Module({
  imports: [
    SubCommandTestModule
  ],
  providers: [CliCommand],
})
export class AppModule { }
