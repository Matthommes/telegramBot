// import { Telegraf } from "telegraf";
const { Telegraf } = require("telegraf");
const env = require("dotenv").config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.command("start", (ctx) => {
  const userName = ctx.from.username;
  if (userName) {
    ctx.reply(`Hello ${userName}  !!! Welcome to my first bot`);
  } else {
    ctx.reply("Hello There! Good  to have you here!");
  }
});

bot.on("message", (ctx) => {
  ctx.reply("You sent me: " + ctx.message.text);
});
bot.launch();
