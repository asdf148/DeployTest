import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatModule } from './chat/chat.module';
import { SalesListModule } from './sales-list/sales-list.module';

@Module({
  imports: [ChatModule, SalesListModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
