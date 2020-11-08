const redis = require('redis')

//redis-10727.c232.us-east-1-2.ec2.cloud.redislabs.com:10727
//tyzwar-hydtuw-0peQmy

const { redisPath } = require('./config.json')

module.exports = async () => {
  return await new Promise((resolve, reject) => {
    const client = redis.createClient({
      url: redisPath
    })
    
    client.on('error', (err) => {
      console.error('Redis error:', err)
      client.quit()
      reject(err)
    })
    
    client.on('ready', () => {
      resolve(client)
    })
  })
}
