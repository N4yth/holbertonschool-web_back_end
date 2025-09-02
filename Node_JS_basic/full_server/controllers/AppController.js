class AppController {
  static getHomepage() {
    return {
      message: 'Hello Holberton School!',
      status: 200,
    };
  }
}

module.exports = AppController;
