import Auth from "Auth";
import getObjectKeys from "getObjectKeys";

export default class User {
  static userFieldsList() {
    return ["id", "email", "firstName", "lastName", "username", "phone"];
  }

  static getUserInfo() {
    return Auth.isUserLoggedIn()
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null;
  }

  static setUserInfo(user) {
    const userFields = getObjectKeys(user, this.userFieldsList());

    localStorage.setItem("userInfo", JSON.stringify(userFields));
  }

  static removeUserInfo() {
    localStorage.removeItem("userInfo");
  }
}
