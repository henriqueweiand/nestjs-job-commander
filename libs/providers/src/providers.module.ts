import { DynamicModule, Module, Type } from '@nestjs/common';

@Module({
  providers: [],
  exports: [],
})
export class ProvidersModule {
  static with(provider: Type | DynamicModule): DynamicModule {
    return {
      module: ProvidersModule,
      imports: [provider],
      exports: [provider],
    };
  }
}
