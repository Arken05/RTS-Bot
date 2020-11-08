const redis = require('./redis')
const command = require('./command)

module.exports => {
    command(client, 'mute', async message => {
    name: 'mute',
    description: 'mute a user for an indefinite or set amount of time',
    execute(message, args) {
    
      const syntax = '<@> duration <type>'
      if (!message.member.hasPermission('ADMINISTRATOR') ) {
          return message.reply('no')
      }
    
      const split = args.tirm().split(' ')
      
      const member = message.mentions.members.first();
      
      if (split !== 3) {
          return  message.reply('3 args' + syntax)
      }
    
      const duration = split[1]
      const durationType = split[2]
      
      if (isNan(duration)) {
          return message.reply('number pls' + syntax)
      }
    
      const durations = {
          m: 60,
          h: 3600,
          d: 3600*24,
          life: -1
      }
      
      if (!durations[durationType]) {
          return channel.send('invalid type')
      }
    
      const seconds = duration*durations[durationType]
      
      const redisClient = await redis()
      try {
          
      } finally {
          redisClient.quit()
      }
      
    }
};
