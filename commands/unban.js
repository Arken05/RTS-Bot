module.exports = {
        name: "unban",
        description: "unban a member",
        execute(message, args) {
                const member = message.mentions.members.first();
                if(!member)
                        return message.reply("```//unban <member> [reason for unban] \n \nPinging/tagging a user is a required argument. A reason is optional.```");
                if(!member.bannable)
                        return message.reply("I refuse.");
                let reason = args.slice(1).join(' ');
                if(!reason) reason = "No reason provided";

                member.ban(reason)
                        .catch(error => message.reply(`Sorry ${message.author} I couldn't unban because of : ${error}`));
                message.reply(`Unbanned ${member.user.tag} because: ${reason}`);
        }
};
