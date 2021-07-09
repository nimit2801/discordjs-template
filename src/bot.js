require('dotenv').config();
const discord = require('discord.js');
const bot = new discord.Client();

bot.on('ready', async () => {
  console.log('The bot is running!');
  bot.user.setActivity(`with unicorns!`, {
    type: 'PLAYING',
  });
});

bot.on('message', async (message) => {
  message.channel.send('Hiii');
});

bot.login(process.env.bot_token);
