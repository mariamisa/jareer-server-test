const connection = require('../../config/connection');

const updateUser = ({ userId, username, mobile }) => {
  const sql = {
    text:
      'UPDATE users SET username = $1, mobile = $2 WHERE id = $3;',
    values: [username, mobile, userId],
  };
  return connection.query(sql);
};

module.exports = updateUser;
