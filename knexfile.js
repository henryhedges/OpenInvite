// Update with your config settings.

module.exports = {
 production: {
    client: 'pg',
    connection: {
      host:'ec2-54-247-81-123.eu-west-1.compute.amazonaws.com',
      database:'dmbarhi7fssa',
      user:'xrcfdnhaqztqdv',
      password:'y28gCJqxEjxMs18fLFY0ysazcF',
      ssl:true
    },
    searchPath: 'knex,public'
  }
};

// Steps to setting up a MySql server at a work station for db testing:

// (if mysql is not installed brew install it, but it is on work stations) ... if you don't have homebrew google it and install it

// 1) mysql.server start

// 2) mysql --host=localhost --user=root

// 3) create database db
// 3a) in another tab, knex migrate:latest to populate the db with tables

// 4) use db to get in there and see what you've done
