import { Injectable } from '@nestjs/common';
import { Telegraf } from 'telegraf';
import { Ctx, Start } from 'nestjs-telegraf';
import { Context } from 'telegraf';

@Injectable()
export class TelegrambotService {
  // @Start()
  // async sendMessage(@Ctx() ctx: Context) {
  //   await ctx.reply('Hi');
  // }
  //
  // @Start()
  // sendDocument(@Ctx() ctx: any) {
  //   const bpt = ctx.botInfo;
  //   return bpt;
  // }
}
