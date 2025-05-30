const bcrypt = require('bcrypt');

const adminPswd = async () => {
  try {
    const hashPswd = await bcrypt.hash("greenland#2025", 10);
    console.log("Hashed admin password:", hashPswd);
  } catch (error) {
    console.error("Something went wrong!", error);
  }
};

adminPswd(); 

module.exports = adminPswd;
