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
        {name: '**Server Rules**', value: '1. Be respectful \n\
2. Be nice' },
        {name: 'Advertising Rules', value: '1. Post in the correct channels \n\
2. NO DM ADVERTISING' },
      )
      .setThumbnail('https://media.discordapp.net/attachments/753667854800519223/774995173435637790/20201101_204742.jpg?width=654&height=654')
      .setFooter('')
    message.channel.send(embed);
  },
};
