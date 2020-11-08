const Discord = require('discord.js');

module.exports = {
  name: 'embed',
  description: 'custom embed',
  execute(message, args) {
    if(!message.member.hasPermission("ADMINISTRATOR") )
      return message.reply("admin only")
    
    const embed = new Discord.MessageEmbed()
      .setColor('#a822f8')
      .setTitle('**Rules**')
      .setDescription('Follow all the rules in order to maintain membership of the server: ')
      .addFields(
        {name: '__Server Rules__', value: ' • Be respectful \n\
 • Be nice' },
        {name: '__Advertising Rules__', value: ' • Post in the correct channels \n\
 • NO DM ADVERTISING' },
      )
      .setThumbnail('https://media.discordapp.net/attachments/753667854800519223/774995173435637790/20201101_204742.jpg?width=654&height=654')
      .setFooter('')
    message.channel.send(embed);
  },
};
