module.exports = {
    name: 'kick',
    description: 'to kick a user',
    execute(message, args) {
        const member = <message>,mentions.members.first();
	member.kick();
    }
};
