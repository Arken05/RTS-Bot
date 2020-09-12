module.exports = {
  name: 'unban',
  description: 'to unban a user',
  execute(message, args) {
     let id = args.slice(0)
     message.reply("test")
     if(!id)
       return message.reply("```//unban <member> [reason for unban] \n \nUser ID is a required argument. A reason is optional.```")
     let reasonn = args.slice(1).join(' ');
     if(!reason) reason = "No reason provided";
    
     id.unban(reason)
          .catch(error => message.reply(`Sorry ${message.author} I couldn't unban because of : ${error}`));
    message.reply(`Unbanned ${id} beacuse: ${reason}`);
  }
};
