module.exports = {
  name: 'unban',
  description: 'to unban a user',
  execute(message, args) {

    //if(!message.member.hasPermission("BAN_MEMBERS") )
       //return message.reply("You don't have the permissions to do that");

    let id = args[0]
    if(!id)
       return message.reply("```//unban <member> [reason for unban] \n \nPinging/tagging a user is a required argument. A reason is optional.```");
    let reason = args[1]
    if(!reason) reason = "no reason"
    message.guild.members.unban(id)
    message.reply(`Unbanned: ${id} \nReason: ${reason}`);
  }
};
