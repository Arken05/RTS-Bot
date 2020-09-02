const Discord = require('discord.js');

const config = require('./config.json')
const client = new Discord.Client();

 

client.once('ready', () => {

    console.log('All is good');

});



client.on('message', message => {

    if (message.content === "ping") {
     message.reply("pong");
    }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN); //BOT_TOKEN is the Client Secret
