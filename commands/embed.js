module.exports = {
  name: 'embed',
  description: 'custom embed',
  execute(message, args) {
    if(!message.member.hasPermission("ADMINISTRATOR") )
      return message.reply("admin only")
    
    const embed = new Discord.MessageEmbed()
      .setColor('')
      .setTitle('EMBED')
      .setDescription('test')
      .setFooter('test')
    message.channel.send(embed);
  },
};
