import { Module } from '@nestjs/common';
import { TelegrambotService } from './telegrambot.service';
import { TelegrambotController } from './telegrambot.controller';
import { TelegrafModule } from 'nestjs-telegraf';

@Module({
  imports: [
    TelegrafModule.forRoot({
      token: '1610314868:AAEWGrNxvqWT4Fcv-I-Mim8yMUcvPZsnJJI',
    }),
  ],
  providers: [TelegrambotService],
  controllers: [TelegrambotController],
  exports: [TelegrambotService],
})
export class TelegramBotModule {}
