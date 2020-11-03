module.exports = {
  name: 'purge',
  description: 'mass delete messages',
  execute(message, args) {
    if(!message.member.hasPermission("MANAGE_MESSAGES") )
		  return message.reply("Requires permission: MANAGE MESSAGES");
    const amount = args.slice(1).join(' ');
    if (!amount) 
    	return message.reply('```//purge <amount> \n \nNumber of messages to delete is a required argument.```')
    if (amount < 1) 
    	return message.reply('```Number of messages must be at least 1.```')
    if (amount > 100)
        return message.reply('```Number of messages must be below 100.```')
    await message.channel.messages.fetch({ limit: amount }).then(messages => {
    	message.channel.bulkDelete(messages
    )});
  },
};
