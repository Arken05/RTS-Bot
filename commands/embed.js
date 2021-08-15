const Discord = require('discord.js');

module.exports = {
  name: 'embed',
  description: 'custom embed',
  execute(message, args) {
    if(!message.member.hasPermission("ADMINISTRATOR") )
      return message.reply("admin only")
    
    const embed = new Discord.MessageEmbed()
      .setColor('#a822f8')
      .setTitle('**Settlement Classification Act 2021**')
      .setDescription('All cities in the Federal Republic of Espaeria will now be subject to The Settlement Classification Act as detailed below. Each tier is graded upon its amount of residential buildings, services, institutions and attractions and can be re-assessed upon request')
      .addFields(
        {name: '__Classifications__', value: ' insert detail ' },
      )
      .setThumbnail('https://media.discordapp.net/attachments/753667854800519223/774995173435637790/20201101_204742.jpg?width=654&height=654')
      .setFooter('')
    message.channel.send(embed);
  },
};
