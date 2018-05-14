import getObjectKeys from "getObjectKeys";

export default class Auth {
  static tokensList() {
    return ["access-token", "expiry", "uid", "client"];
  }

  static getUserTokens() {
    return this.isUserLoggedIn()
      ? JSON.parse(localStorage.getItem("tokens"))
      : null;
  }

  static setUserTokens(headers) {
    const tokens = getObjectKeys(headers, this.tokensList());

    localStorage.setItem("tokens", JSON.stringify(tokens));
  }

  static removeUserTokens() {
    localStorage.removeItem("tokens");
  }

  static isUserLoggedIn() {
    return localStorage.getItem("tokens") !== null;
  }
}
