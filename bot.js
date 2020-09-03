const fs = require('fs');
const Discord = require('discord.js');

const prefix = "//";
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
 
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {

    console.log('All is good.');

});



client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(' ');
	const command = args.shift().toLowerCase();

	if (command === 'ping') {
	 client.commands.get('ping').execute(message, args);
	}
    	if (command === 'server') {
	   message.channel.send(`Server Name: ${message.guild.name}\nTotal Members: ${message.guild.memberCount}`)
				  }
	else if (command === 'kick') {
	     if (!message.mentions.users.size) {
		      return message.reply('you need to tag a user in order to kick them!');
	     }
	     const taggedUser = message.mentions.users.first();

	     message.channel.send(`You wanted to kick: ${taggedUser.username}`);
	    }
});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN); //BOT_TOKEN is the Client Secret
