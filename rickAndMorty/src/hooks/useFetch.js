import React ,{ useEffect,useState } from "react";
import axios from "axios";

function useFetch(url) {
    const [data,setData] = useState([])
    
    const [error,setError] = useState(false)
    const [loading,setLoading] = useState(true)

    const fetchData = async() => {
        try {
          const {data: responseData} = await axios.get(url)
      
          setData(responseData.results)
          setLoading(false)
        } catch (err) {
          setError(err.message)
          setLoading(false)
        }
          
      }

    useEffect(() => {
        fetchData()
    }, [])

    return {error,loading,data}
}
export default useFetch;