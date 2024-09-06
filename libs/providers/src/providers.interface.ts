import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class Providers {
  abstract getData(): Promise<boolean>;
}
