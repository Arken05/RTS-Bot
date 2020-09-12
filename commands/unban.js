module.exports = {
  name: 'unban',
  description: 'to unban a user',
  execute(message, args) {
    let userID = args[0]
      msg.guild.fetchBans().then(bans=> {
      if(bans.size == 0) return 
      let bUser = bans.find(b => b.user.id == userID)
      if(!bUser) return
      msg.guild.members.unban(bUser.user)
  }
};
