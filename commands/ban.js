module.exports = {
    name: 'ban',
    description: 'to ban a user',
    execute(message, args) {
        const member = message.mentions.members.first();
	if(!message.author.hasPermissions("BAN_MEMBERS"))
		return message.reply("You don't have the permissions to do that")
	if(!member)
		return message.reply("```//ban <member> [reason for ban] \n \nPinging/tagging a user is a required argument. A reason is optional.```");
	if(!member.bannable)
		return message.reply("I refuse.");
	let reason = args.slice(1).join(' ');
    	if(!reason) reason = "No reason provided";
    
    	member.ban(reason)
      		.catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    	message.reply(`Banned ${member.user.tag} because: ${reason}`);

    }
};
