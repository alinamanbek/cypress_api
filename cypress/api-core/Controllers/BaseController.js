export class BaseController {
    constructor() {}
  
    async authorization(urlencoded) {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
      myHeaders.append("Authorization", "Bearer ..."); // your authorization header
  
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
      };
  
      let token = await fetch("http://167.114.201.175:5001/Token", requestOptions)
        .then(response => response.json())
        .then(result => result.access_token)
        .catch(error => console.log('error', error));
  
      process.env.token = `Bearer ${token}`;
      return process.env.token;
    }
  
    async getNotificationList(Title = "") {
      let myHeadersGet = new Headers();
      myHeadersGet.append("Content-Type", "text/plain");
      myHeadersGet.append("Authorization", process.env.token);
  
      let requestOptionsGet = {
        method: 'GET',
        headers: myHeadersGet,
      };
  
      let notifications = await fetch("http://167.114.201.175:5001/api/clients/FiltersGroup", requestOptionsGet)
        .then(data => data.json())
        .then((json) => { return json; })
        .catch(error => console.log('error', error));
  
      return notifications;
    }
  }
  