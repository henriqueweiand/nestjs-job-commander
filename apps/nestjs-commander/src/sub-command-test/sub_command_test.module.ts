import { Module } from '@nestjs/common';

import { SubCommandTest } from './sub_command_test';

@Module({
  imports: [],
  providers: [SubCommandTest],
})
export class SubCommandTestModule { }
