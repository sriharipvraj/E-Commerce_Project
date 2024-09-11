import axios from "axios";

export const frontendApi = {
  HomeCategory: async function () {
    return await axios.get(
      "http://localhost:4000/api/dashboard/category/home/category"
    );
  },
  HomeFeaturedProducts: async function () {
    return await axios.get(
      "http://localhost:4000/api/dashboard/product/products/featured"
    );
  },
  GetAllCategories: async function () {
    return await axios.get(
      "http://localhost:4000/api/dashboard/category/getcategories"
    );
  },
  GetAllBrands: async function () {
    return await axios.get(
      "http://localhost:4000/api/dashboard/brands/getbrands"
    );
  },
  GetProductsByCategory: async function (){
    return await axios.get('');
  }
};
