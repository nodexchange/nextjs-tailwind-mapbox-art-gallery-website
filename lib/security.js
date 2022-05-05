import crypto from 'crypto';

const secret = process.env.HASH_KEY;

const sha512 = (password, salt) =>{
  let hash = crypto.createHmac('sha512', salt); // sha512 crypto algorithm
  hash.update(password);
  hash = hash.digest('hex');
  return {
      salt,
      hash,
  };
};

const generateSalt = (length) => {
  return crypto.randomBytes(Math.ceil(length/2))
          .toString('hex')
          .slice(0.16);
};

const generatePassword = (password) => {
  // var salt = generateSalt(16); // Let's generate the salt
  const salt = secret; // Let's generate the salt
  const passwordESalt = sha512(password, salt); // We get the password and the salt
  // From here you can return the password or save the salt and password in the bank
  // console.log('Password Hash: ' + passwordESalt.hash);
  // console.log('Salt: ' + passwordESalt.salt);
  return passwordESalt.hash;
}

const login = (LoginPassword, hashOnBank) => {
  const passwordESalt = sha512(LoginPassword, secret)
  return hashOnBank === passwordESalt.hash;
}


export {
  generatePassword,
  login
}