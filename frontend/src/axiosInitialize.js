import axios from "axios";


//https://www.digitalocean.com/community/tutorials/react-axios-react

export default axios.create({
  baseURL: "http://localhost:8080/",
  headers: {
    "Content-type": "application/json"
  }
});
