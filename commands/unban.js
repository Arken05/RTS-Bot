const Discord = require(`discord.js`);

module.exports.run {
  name: 'unban',
  description 'to unban a user',
    
  async run({ message, args, server }, t) {
    
    let member = await message.guild.fetchBans()
    let ban
    ban = member.find(b => b.user.username === args[0]) || member.get(args[0].replace(/[!@<>]/g, "")) || member.find(b => b.user.tag === args[0])
    if (!ban) return message.reply('no')
    }
  
    message.guild.members.unban(ban.user.id).then((user) => {
      }
    })
}
