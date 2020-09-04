module.exports = {
        name: "unban",
        description: "unban a member",
        execute(message, args) {
                let id = args.slice(0).join(' ');
                msg.guild.members.unban(id)
        }
};
