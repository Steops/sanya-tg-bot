import { Context, Telegraf } from 'telegraf';
import { AppService } from './app.service';
export declare class AppUpdate {
    private readonly bot;
    private readonly appService;
    constructor(bot: Telegraf<Context>, appService: AppService);
    startCommand(ctx: any): Promise<void>;
    textWalk(ctx: any): Promise<void>;
    getHello(): string;
}
