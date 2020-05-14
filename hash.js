const bcrypt = require('bcryptjs');

const password = 'abcd';
// const salt = bcrypt.genSaltSync(10);
// const hash = bcrypt.hashSync(password, salt);

// console.log(salt);
// console.log(hash);

// const result = bcrypt.compareSync(password, hash);
// console.log(result);

const hash = '$2a$10$OjAb5ek63lRwS1zY8wRfQ.Avr/6YAntacPyyL7fkBXQdj1U0v7fea';

bcrypt.compare('not right', hash)
  .then((result) => {
    console.log(result);
  });

bcrypt.genSalt(10)
  .then((salt) => {
    return bcrypt.hash(password, salt);
  })
  .then((hash) => {
    console.log(hash);
  });
