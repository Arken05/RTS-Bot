module.exports = {
  name: 'purge',
  description: 'mass delete messages',
  execute(message, args) {
    if(!message.member.hasPermission("MANAGE MESSAGES") )
		  return message.reply("Requires permission: MANAGE MESSAGES");
