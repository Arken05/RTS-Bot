module.exports = {
  name: 'unban',
  description: 'to unban a user',
  usage: '//unban <id> (reason)',
  execute(message, args) {
    if(!message.member.hasPermission("BAN_MEMBERS") )
       return message.reply("You don't have the permissions to do that.");
    let reason = args[1]
    if(!reason) reason = "no reason"
    let userID = args[0]
    if(!userID)
      return message.reply("```//unban <member> [reason for unban] \n \nPinging/tagging a user is a required argument. A reason is optional.```")
    //message.guild.fetchBans().then(bans=> {
    //if(bans.size == 0) return 
    //let bUser = bans.find(b => b.user.id == userID)
    //if()
      //return message.reply("This user is not banned.")
    message.guild.members.unban(userID)
    message.reply(`User ${userID} unbanned by ${message.author}. \nReason: ${reason}.`);
  },
};
