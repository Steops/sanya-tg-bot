import { AppUpdate } from './app.update';
import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import * as LocalSession from 'telegraf-session-local';
import { AppService } from './app.service';

const sessions = new LocalSession({database: 'session_db.json'})

@Module({
  imports: [
    TelegrafModule.forRoot({
      middlewares: [sessions.middleware()],
      token: '7656777567:AAFEmMtjCzpgQKgEA4wofIJppLr34HarkFs'
    })
  ],
  providers: [AppService, AppUpdate],
})
export class AppModule {}
