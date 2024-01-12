import React, {useEffect} from "react";
import { fetchData } from "../utilities/apiService";

const TestBackEnd = () => {
  useEffect(() => {
    const endpoint = 'test-backend'
    const fetchDataFunction = async () => {
      try {
        const data = await fetchData(endpoint)
        console.log(data)
      } catch (error) {
        console.error('Error fetching data', error)
      }
    }
    fetchDataFunction()
  }, [])
  return ( 
    <div>
      <h1>TEST</h1>
    </div>
  );
}
export default TestBackEnd;