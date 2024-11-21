"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppUpdate = void 0;
const common_1 = require("@nestjs/common");
const nestjs_telegraf_1 = require("nestjs-telegraf");
const telegraf_1 = require("telegraf");
const app_service_1 = require("./app.service");
const SANYA = 'JessePaul1';
const STEPA = 'ste0ps';
let AppUpdate = class AppUpdate {
    constructor(bot, appService) {
        this.bot = bot;
        this.appService = appService;
    }
    async startCommand(ctx) {
        await ctx.reply('Я бот, который высчитывает вероятность того, что друзья пойдут с тобой гулять, Санек');
    }
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
                ctx.reply(`Средняя вероятность, Санёк, каких-то ${chance}%, думаю друзья останутся дома`);
            }
            if (chance > 60 && chance < 95) {
                ctx.reply(`Ну шансы есть, Санёк, ${chance}%, друзья должны обдумать`);
            }
            if (chance > 95) {
                ctx.reply(`${chance}%!!! Если друзья не согласятся идти гулять, то задумайся, а друзья ли они тебе???`);
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
    getHello() {
        return this.appService.getHello();
    }
};
exports.AppUpdate = AppUpdate;
__decorate([
    (0, nestjs_telegraf_1.Start)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppUpdate.prototype, "startCommand", null);
__decorate([
    (0, nestjs_telegraf_1.On)('text'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppUpdate.prototype, "textWalk", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppUpdate.prototype, "getHello", null);
exports.AppUpdate = AppUpdate = __decorate([
    (0, nestjs_telegraf_1.Update)(),
    __param(0, (0, nestjs_telegraf_1.InjectBot)()),
    __metadata("design:paramtypes", [telegraf_1.Telegraf,
        app_service_1.AppService])
], AppUpdate);
//# sourceMappingURL=app.update.js.map