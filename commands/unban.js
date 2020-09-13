module.exports = {
  name: 'unban',
  description: 'to unban a user',
  execute(message, args) {
    let id = args[0]
    if(!id)
       return message.reply("```//unban <member> [reason for unban] \n \nPinging/tagging a user is a required argument. A reason is optional.```");
    guild.members.unban(id)
    message.reply("```unbanned, warning this may not be true```");
  }
};
