import React, { useContext, useEffect } from "react";
import axios from "axios";
import { MyStore } from "../Context/AppContaxts";
import ProductCard from "../Componets/ProductCard";

const Home = () => {
   const {setProducts, products} = useContext(MyStore)
  const getProductData = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products");

      setProducts(res.data.products);
    } catch (error) {
      console.log("Error in getProductData", error);
    }
  };
  useEffect(() => {
    getProductData();
  }, []);

  return <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
    {
        products.map((val)=>{
            return < ProductCard  key={val.id} product={val}/>
        })
    }
  </div>;
};

export default Home;
