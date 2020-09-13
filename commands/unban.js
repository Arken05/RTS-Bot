module.exports = {
  name: 'unban',
  description: 'to unban a user',
  execute(message, args) {
    let userID = args[0]
      if(!userID)
        return message.reply("```//unban <member> [reason for unban] \n \nPinging/tagging a user is a required argument. A reason is optional.```");
      message.guild.fetchBans().then(bans=> {
      if(bans.size == 0) return 
      let bUser = bans.find(b => b.user.id == userID)
      if(!bUser) return
      message.guild.members.unban(bUser.user)
      })
  }
};
