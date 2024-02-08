export default class AppController {
  static getHomePage(_request, response) {
    response.send('Hello Holberton School!');
  }
}
