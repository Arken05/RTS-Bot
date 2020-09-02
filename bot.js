const Discord = require('discord.js');

const config = require('./config.json')
const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});



client.on('message', message => {

    if (message.content === "ping") {
     message.reply("pong");
    }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(config.token); //BOT_TOKEN is the Client Secret
