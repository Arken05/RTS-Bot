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
° • .  Server Rules  . • ° 

:wumpusdance: Please be respectful to everyone, do not target or harass others.
:wumpusdance: Use common sense. Not all rules are included here, please do not try to find loopholes.
:wumpusdance: No NSFW media is allowed including: videos, photos, links, emojis. This will result in severe moderation, you may be banned. Discussing NSFW topics may result in moderation.
:wumpusdance: Try to keep to English.
:wumpusdance: Respect Staff. Don’t complain about being punished and don’t be a nuisance.
:wumpusdance: You must follow Discord ToS and Guidelines at all times.
:wumpusdance: Do not copy a staff member's name without explicit permission.
:wumpusdance: Keep swearing to a minimum. It is allowed but do not overdo it.
:wumpusdance: Spam is forbidden in all channels except #•⚓•spam.

° • .  Advertising Rules  . • °

:weewoo:  Use a Permanent invite.
:weewoo:  Your server ad must include a description.
:weewoo:  No Invite For Reward or giveaway servers. These are usually scams.
:weewoo:  Advertise in the correct channels only.
:weewoo:  Your server must follow Discord ToS & Guidelines.
:weewoo:  No NSFW servers may be advertised here.
:weewoo:  DM advertising will result in an immediate ban, please report this if you experience it.')
      .setFooter('')
    message.channel.send(embed);
  },
};
