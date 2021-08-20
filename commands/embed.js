const Discord = require('discord.js');

module.exports = {
  name: 'embed',
  description: 'custom embed',
  execute(message, args) {
    if(!message.member.hasPermission("ADMINISTRATOR") )
      return message.reply("admin only")
    
    const embed = new Discord.MessageEmbed()
      .setColor('#ffdd00')
      .setTitle('**Settlement Classification Act 2021**')
      .setDescription('All cities in the Federal Republic of Espaeria will now be subject to The Settlement Classification Act as detailed below. Each tier is graded upon its amount of residential buildings, services, institutions and attractions and can be re-assessed upon request.')
      .addFields(
        {name: '__Classifications__', value: 'Hamlet: \n
• A small collection of houses \n
• Little to no commercial services \n

Village: \n
• Small collection of houses \n
• Some commercial services \n
• Centre point \n

Town: \n
• Large collection of houses \n
• Some varying services \n
• Local government building \n
• Some attractions \n
• Established road network \n

City: \n
• Large collection of houses \n
• Large amount of services \n
• Governmental institutions \n
• Wide array of attraction \n
• Established road network' }
      )
      .setThumbnail('https://cdn.discordapp.com/attachments/876573593360818267/876577308805316638/image0.jpg')
      .setFooter('')
    message.channel.send(embed);
  },
};
