const bcrypt = require("bcrypt");

async function hashPassword(password){
    console.log(await bcrypt.hash(password, 8));
   return await bcrypt.hash(password, 8);
}

async function verifyPassword(password, hashPassword){
    return await bcrypt.compare(password, hashPassword)
}

module.exports = {
    hashPassword: hashPassword,
    verifyPassword: verifyPassword
}