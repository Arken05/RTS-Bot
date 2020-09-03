module.exports = {
    name: 'kick',
    description: 'to kick a user',
    execute(message, args) {
        const member = message.mentions.members.first();
	if(!member)
		return message.reply("You need to mention a vaild user.");
	if(!member.kickable)
		return message.reply("I refuse.");
	let reason = args.slice(1).join(' ');
    	if(!reason) reason = "No reason provided";
    
    	await member.kick(reason)
      		.catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    	message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);

    }
};
