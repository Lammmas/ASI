// API Users static class
export default class ApiSearch {
  // get a list of users
  static search(name) {
    return new Promise(res => {
      var request = new XMLHttpRequest();

      request.open('GET', 'https://reemet.me/demo/ASI/backend/search/' + name, true);
      request.setRequestHeader('Content-Type', 'application/json');
      request.withCredentials = false;

      // Had issues with using fetch, so reverted to XMLHttpRequest
      request.onreadystatechange = function() {
        if (request.readyState === 4 && request.status === 200) {
          res(JSON.parse(request.responseText));
        } else if (request.readyState === 4 && request.status !== 200) {
          console.log('req err');
          res([]);
        }
      };

      request.send();
    });
  }
}
