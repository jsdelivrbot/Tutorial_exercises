//SQlite DB config

module.exports = {

  database: 'cctest',
  username: '',
  password: '',
  params: {
    dialect: 'sqlite',
    storage: 'cctest.sqlite',
    define: {
      underscored: true
    }
  },
  jwtSecret: "xop$-s1",
  jwtSession: { session: false }
};
