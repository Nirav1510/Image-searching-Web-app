import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID Zsi9fC_u7OLgaF3TH7RrzlGB5B36bz-kEszIvVOLTv8",
  },
});
