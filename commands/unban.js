module.exports = {
  name: 'unban',
  description: 'to unban a user',
  execute(message, args) {

    //if(!message.member.hasPermission("BAN_MEMBERS") )
       //return message.reply("You don't have the permissions to do that");

       return message.reply("```//unban <member> [reason for unban] \n \nPinging/tagging a user is a required argument. A reason is optional.```");
    let reason = args[1]
    if(!reason) reason = "no reason"
    let userID = args[0]
      msg.guild.fetchBans().then(bans=> {
      if(bans.size == 0) return 
      let bUser = bans.find(b => b.user.id == userID)
      if(!bUser) return
      msg.guild.members.unban(bUser.user)
  }
};
