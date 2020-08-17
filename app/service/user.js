'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async getAll() {
    return [
      { name: 'jerry' },
      { name: 'Tom' },
    ];
  }
}

module.exports = UserService;
