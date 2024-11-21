import { Get } from '@nestjs/common';
import { InjectBot, On, Start, Update } from 'nestjs-telegraf';
import { Context, Telegraf } from 'telegraf';
import { AppService } from './app.service';

const SANYA = 'JessePaul1';

@Update()
export class AppUpdate {
  constructor(
    @InjectBot() private readonly bot: Telegraf<Context>,
    private readonly appService: AppService,
  ) {}

  @Start()
  async startCommand(ctx) {
    await ctx.reply(
      'Я бот, который высчитывает вероятность того, что друзья пойдут с тобой гулять, Санек',
    );
  }

  @On('text')
  async textWalk(ctx) {
    const username = ctx.from.username;
    const text = ctx.message.text;
    const walk = text.includes('гул') || text.includes('Гул');
    if (username === SANYA && walk) {
      const chance = Math.floor(Math.random() * 101);
      if (chance < 30) {
        ctx.reply(`Очень маленькая вероятность, Санёк, всего лишь ${chance}%`);
      }
      if (chance > 30 && chance < 60) {
        ctx.reply(
          `Средняя вероятность, Санёк, каких-то ${chance}%, думаю друзья останутся дома`,
        );
      }
      if (chance > 60 && chance < 95) {
        ctx.reply(`Ну шансы есть, Санёк, ${chance}%, друзья должны обдумать`);
      }
      if (chance > 95) {
        ctx.reply(
          `${chance}%!!! Если друзья не согласятся идти гулять, то задумайся, а друзья ли они тебе???`,
        );
      }
    }

    if (text.includes('ряльно') || text.includes('Ряльно')) {
      ctx.reply('РЯЛЬНО БЛЯТЬ (простите)');
    }
    if (text.includes('пиво') || text.includes('Пиво')) {
      ctx.reply('ООО СЮДА пивасик уважаем +rep');
    }
        if (text.includes('эксид') || text.includes('exeed') || text.includes('карш')) {
      ctx.reply('Чур я багажнике');
    }
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
