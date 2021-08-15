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
      .setThumbnail('https://cdn.discordapp.com/attachments/876573593360818267/876577308805316638/image0.jpg')
      .setFooter('')
    message.channel.send(embed);
  },
};
