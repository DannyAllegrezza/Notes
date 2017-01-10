// Development (localhost) environment
// Using 'npm run dev' will use this config
var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API: '"http://beeper.dev:8000"'
})
