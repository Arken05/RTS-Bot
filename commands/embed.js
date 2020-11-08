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
        {name: '__Server Rules__', value: ' • Be respectful to all \n\
• You must follow Discord ToS & Guidelines at all times.\n\
• You may not copy a staff member`s name without explicit permission.\n\
• Keep swearing to a mimimum. It is allowed, but do not overdo it.\n\
• Respect Staff. They are here for your own good.\n\
• Try to keep to English\n\
• Use common sense. Not all rules are included here, do not attempt to find loopholes.\n\
• No NSFW media is allowed including: videos, photos, links, emojis. This will result in severe moderation, you may be banned. Discussing NSFW topics may result in moderation.\n\
• Spam is forbidden in all channels except #•⚓•spam.' },
        {name: '__Advertising Rules__', value: ' • Advertise in the correct channels only.\n\
• Your ad must contain a permanent invite.\n\
• Your ad must contain a description. \n\
• Your server must follow Discord ToS & Guidelines\n\
• No NSFW servers may be advertised here.\n\
• No Invite for Reward or giveaway servers may be advertised here.\n\
• DM advertising will result in an immediate ban, please report this if you experience it.' },
      )
      .setThumbnail('https://media.discordapp.net/attachments/753667854800519223/774995173435637790/20201101_204742.jpg?width=654&height=654')
      .setFooter('')
    message.channel.send(embed);
  },
};
