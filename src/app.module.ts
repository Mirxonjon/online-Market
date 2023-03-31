import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { config } from './config';

@Module({
  imports: [ ConfigModule.forRoot(config)],
  controllers: [],
  providers: [],
})
export class AppModule {}
