module.exports = {
  name: 'unban',
  description: 'to unban a user',
  execute(message, args) {
    //if(!message.member.hasPermission("BAN_MEMBERS") )
       //return message.reply("You don't have the permissions to do that");
    let reason = args[1]
    if(!reason) reason = "no reason"
    let userID = args[0]
      message.guild.fetchBans().then(bans=> {
      if(bans.size == 0) return 
      let bUser = bans.find(b => b.user.id == userID)
      if(!bUser) return
      message.guild.members.unban(bUser.user)
      })
  }
};
