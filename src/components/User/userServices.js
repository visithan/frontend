import http from "./../../httpCommon";

class userDataService {
  
  getAllUsers() {
    return http.get("/users");
  }
}
export default new userDataService();
