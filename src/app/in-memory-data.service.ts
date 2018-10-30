import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { ResponseOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const users = [
      { id: 11, firstName: 'Rahul', lastName: 'Gupta', email: 'test123@gmail.com', password:'welcome' },
      { id: 12, firstName: 'Rohan', lastName: 'Rawat', email: 'test567@gmail.com', password:'welcome' }
    ];
    return {users};
  }

  getToken(user) {
    return 'This is a token';
  }
  post(reqInfo: RequestInfo) {
    console.log(reqInfo)
    if(reqInfo.id === 'Login') {
      console.log("from login")
      return reqInfo.utils.createResponse$(() => {
        const dataEncapsulation = reqInfo.utils.getConfig().dataEncapsulation;
        const users = reqInfo.collection.find(usr => {
         return reqInfo.req['body'].email === usr.email && reqInfo.req['body'].password === usr.password;
        });

        let responseBody = {};

        if (users) {
          responseBody = {
            id: users.id,
            firstName: users.firstName,
            lastName: users.lastName,
            email: users.email,
            token : this.getToken(users)

          }
        }

        const options: ResponseOptions = responseBody ?
        {
          body: dataEncapsulation ? { responseBody } : responseBody,
          status: 200
        } :
        {
          body: { error: `'User' with email='${reqInfo.req['body'].email}' not found` },
          status: 404
        };

        options.statusText = options.status === 200 ? 'ok' : 'Not found';
        options.headers = reqInfo.headers;
        options.url = reqInfo.url;
        return options;
      });
    }else {
      reqInfo.id = null;
      console.log("from Sign Up");
    }
  }
}
