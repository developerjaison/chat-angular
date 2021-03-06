import { Injectable } from '@angular/core';

const TOKEN = 'TOKEN';

@Injectable({
  providedIn: 'root'
})
export class CustomService {

  constructor() { }

  setToken(token: string): void {
    localStorage.setItem(TOKEN, token);
  }

  isLogged() {
    return localStorage.getItem(TOKEN) != null;
  }

  getToken() {
    return localStorage.getItem(TOKEN) || null;
  }

  removeToken(token: string): void {
    localStorage.removeItem(TOKEN);
  }

}
