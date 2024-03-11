import { useEffect, useState } from "react";

function UseFetch() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [product, setProduct] = useState([]);
  const [stockMarket, setStockMarketData] = useState([]);
  const [allCategory,setAllCategory] = useState({
    mensProducts :[],
    womensProducts:[],
    jewelery:[],
    electronics:[]

  })
  console.log(allCategory,'allCategory')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/products"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setProduct(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&outputsize=full&apikey=demo"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setStockMarketData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        // Filter products based on gender
        const mensProducts = data?.filter(product => product.category === "men's clothing");
        const womensProducts = data?.filter(product => product.category === "women's clothing");
        const jewelery = data?.filter(product => product.category === "jewelery");
        const electronics = data?.filter(product => product.category === "electronics");
        
        allCategory.mensProducts = mensProducts
        allCategory.womensProducts = womensProducts
        allCategory.jewelery = jewelery
        allCategory.electronics = electronics


      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);


  return { data,allCategory, stockMarket, product, loading, error };
}

export default UseFetch;
