module.exports = {  
  // Secret key for JWT signing and encryption
  'secret': 'super secret passphrase',
  // Database connection information
  'database': 'mongodb://dbAccount:Im$6born@ds135680.mlab.com:35680/my-backend',
  // Setting port for server
  'port': process.env.PORT || 3000
}