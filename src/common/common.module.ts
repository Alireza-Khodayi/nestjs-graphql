import { Module } from '@nestjs/common';
import { LoggerModule } from './logger/logger.module';
import { DateScalar } from './scalars/date.scalar';

@Module({ imports: [LoggerModule], providers: [DateScalar] })
export class CommonModule {}
