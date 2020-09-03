module.exports = {
  name: 'server',
  description: 'server stats',
  execute(message, args) {
    message.channel.send(`Server Name: ${message.guild.name}\nTotal Members: ${message.guild.memberCount}`);
  },
};
