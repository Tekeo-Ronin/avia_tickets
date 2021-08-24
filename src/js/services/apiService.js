import axios from "axios";
import config from "../config/apiConfig";

class Api {
  construct(config) {
    this.url = config.url;
  }
}

const api = new Api(config);


export default api;