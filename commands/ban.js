module.exports = {
    name: 'ban',
    description: 'Ban a user',
    usage: '//ban <member> (reason)',
    execute(message, args) {
        if(!message.member.hasPermission("BAN_MEMBERS") )
		return message.reply("Requires permission: BAN MEMBERS");
        const member = message.mentions.members.first();
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
