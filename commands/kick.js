module.exports = {
    name: 'kick',
    description: 'to kick a user',
    execute(message, args) {

        if(!message.member.hasPermission("KICK_MEMBERS") )
		return message.reply("You don't have the permissions to do that");

        const member = message.mentions.members.first();
	if(!member)
		return message.reply("```//kick <member> [reason for kick] \n \nPinging/tagging a user is a required argument. A reason is optional.```");
	if(!member.kickable)
		return message.reply("I refuse.");
	let reason = args.slice(1).join(' ');
    	if(!reason) reason = "No reason provided";
    
    	member.kick(reason)
      		.catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    	message.reply(`Kicked ${member.user.tag} because: ${reason}`);

    }
};
