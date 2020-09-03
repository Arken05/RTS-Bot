const Discord = require('discord.js');

const prefix = "//";
const client = new Discord.Client();

 

client.once('ready', () => {

    console.log('All is good.');

});



client.on('message', message => {

    if (message.content === `${prefix}ping`) {
     message.channel.send("pong");
    }
    else if (message.content === `${prefix}server`) {
     message.channel.send(`Server Name: ${message.guild.name}\nTotal Members: ${message.guild.memberCount}`
                          }
});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN); //BOT_TOKEN is the Client Secret
