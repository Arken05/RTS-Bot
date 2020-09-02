const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NzE3NjgwNzQ0MzY1MDMxNDI0.Xtd2Rw.Y6U-MmF1H9M3V6WId1IahrikY8s); //BOT_TOKEN is the Client Secret
