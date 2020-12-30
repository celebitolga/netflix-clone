export class AuthService {
  loggedIn = true; // It will be change

  isAuthenticated() {
    const promise = new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 1);
    })

    return promise;
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }
}
