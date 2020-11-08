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
      .setDescription('Follow all the rules in order to maintain membership of the server: \n\
° • .  Server Rules  . • ° \n\
\n\
:wumpusdance: Please be respectful to everyone, do not target or harass others. \n\
:wumpusdance: Use common sense. Not all rules are included here, please do not try to find loopholes. \n\
:wumpusdance: No NSFW media is allowed including: videos, photos, links, emojis. This will result in severe moderation, you may be banned. Discussing NSFW topics may result in moderation.\n\
:wumpusdance: Try to keep to English.\n\
:wumpusdance: Respect Staff. Don’t complain about being punished and don’t be a nuisance. \n\
:wumpusdance: You must follow Discord ToS and Guidelines at all times. \n\
:wumpusdance: Do not copy a staff members name without explicit permission. \n\
:wumpusdance: Keep swearing to a minimum. It is allowed but do not overdo it. \n\
:wumpusdance: Spam is forbidden in all channels except #•⚓•spam.\n\
\n\
° • .  Advertising Rules  . • ° \n\
\n\
:weewoo:  Use a Permanent invite. \n\
:weewoo:  Your server ad must include a description. \n\
:weewoo:  No Invite For Reward or giveaway servers. These are usually scams. \n\
:weewoo:  Advertise in the correct channels only. \n\
:weewoo:  Your server must follow Discord ToS & Guidelines. \n\
:weewoo:  No NSFW servers may be advertised here. \n\ 
:weewoo:  DM advertising will result in an immediate ban, please report this if you experience it.')
      .setFooter('')
    message.channel.send(embed);
  },
};
