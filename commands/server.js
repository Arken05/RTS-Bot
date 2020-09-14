module.exports = {
  name: 'membercount',
  description: 'displays current member count',
  execute(message, args) {
    message.channel.send(`Total Members: ${message.guild.memberCount}`);
  },
};
