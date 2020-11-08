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
      .setDescription('Follow all the rules in order to maintain membership of the server: ')
      .addFields(
        {name: 'Server Rules', value: '1. Be respectful \n\
2. Be nice' },
        {name: 'Advertising Rules', value: '1. Post in the correct channels \n\
2. NO DM ADVERTISING' },
      )
      .setFooter('')
    message.channel.send(embed);
  },
};
