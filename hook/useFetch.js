import { useState, useEffect } from "react";
import axios from "axios"; 
import { Alert } from "react-native";

const useFetch = (endpoint, query) => {
    const [data, setdata] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    const [error, seterror] = useState(null);  
    
    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/search${endpoint}`,
        params: { ...query },
        headers: {
          'content-type': 'application/octet-stream',
          'X-RapidAPI-Key': 'caeb3010d9msh15f7ed293524592p1e531ajsn30dd1a37035c',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      };

      const fetchData = async () => {
        setisLoading(true);

        try {
            const response = await axios.request
            (options);
            setdata(response.data.data)
            setisLoading(false);
            console.log(response);
            Alert("123");


        } catch (error) {
            seterror(error);
            alert('There is an error')
            
        } finally{
            setisLoading(false);
        }
        
      } 

      useEffect(() => {
        fetchData();
      },[]);

      const refetch = () => {
            setisLoading(true);
            fetchData();
      }

      return {data, isLoading, error, refetch}
}
export default useFetch 