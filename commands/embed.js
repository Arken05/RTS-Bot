const Discord = require('discord.js');

module.exports = {
  name: 'embed',
  description: 'custom embed',
  execute(message, args) {
    if(!message.member.hasPermission("ADMINISTRATOR") )
      return message.reply("admin only")
    
    const embed = new Discord.MessageEmbed()
      .setColor('#a822f8')
      .setTitle('RULES')
      .setDescription('1. no mean')
      .setFooter('test')
    message.channel.send(embed);
  },
};
