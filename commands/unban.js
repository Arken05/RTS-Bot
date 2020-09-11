module.exports = {
        name: "unban",
        description: "unban a member",
        
        async run (client, message, args) {
    
            if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('You can\'t use that!')
            if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('I don\'t have the permissions.')
    
            const member = message.mentions.members.first();
    
            if(!args[0]) return message.channel.send('Please specify a user');
    
    
    
            
    
            let reason = args.slice(1).join(" ");
    
            if(!reason) reason = 'Unspecified';
    
            message.guild.members.unban(`${member}`, `${reason}`)
            .catch(err => {
                if(err) return message.channel.send('Something went wrong')
            })
    
            message.channel.send('banned');
    
    
        }
    }
