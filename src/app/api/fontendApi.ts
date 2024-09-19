import axios from "axios";

export const frontendApi = {
  HomeCategory: async function () {
    return await axios.get(
      "http://localhost:4000/api/frontend/homepage/category"
    );
  },
  HomeFeaturedProducts: async function () {
    return await axios.get(
      "http://localhost:4000/api/frontend/homepage/product/featured"
    );
  },
  
};
