module.exports = {
        name: "unban",
        description: "unban a member",
        execute(message, args) {
                let id = args.slice(0)
                if(!id)
                        return message.reply("```//unban <member> [reason for unban] \n \nPinging/tagging a user is a required argument. A reason is optional.```");
                let reason = args.slice(1).join(' ');
                if(!reason) reason = "No reason provided";

                id.unban(reason)
                        .catch(error => message.reply(`Sorry ${message.author} I couldn't unban because of : ${error}`));
                message.reply(`Unbanned ${member.user.tag} because: ${reason}`);
        }
};
