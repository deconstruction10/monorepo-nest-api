import { Controller, Get } from '@nestjs/common';
import { TelegrambotService } from './telegrambot.service';
import { Telegraf } from 'telegraf';

@Controller('telegram-bot')
export class TelegrambotController {
  constructor(private readonly telegram: TelegrambotService) {}

  // @Get('send-message')
  // sendInfo() {
  //   this.telegram.sendMessage()
  // }
}
