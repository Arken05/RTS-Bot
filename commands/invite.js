module.exports = {
  name: 'invite',
  description: 'bot invite',
  execute(message, args) {
    message.channel.send('https://discord.com/api/oauth2/authorize?client_id=717680744365031424&permissions=8&scope=bot');
  },
};
