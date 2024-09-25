import axios from "axios";

const api = axios.create({
      baseURL: "http://localhost:5000",
      headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
      },
      withCredentials: true,
});

async function getSelfData() {
      const response = await api.get("/api/v1/user/self");
      return response;
}

export { api }