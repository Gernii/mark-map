import { useState, useEffect } from 'react';
import {markmap} from '../assets/FunctionStorage';
const GetMDFile = () => {
  const [data,setData] = useState([])
  
  const getData = async () => {
    let promise = markmap.map(markmapp => 
      fetch(markmapp.fileSource)
    .then((res) => res.text()))
    setData(await Promise.all(promise))
  }

  useEffect(() => {

    getData()
    
  }, [])
  // console.log(data2);
  return data
}

export default GetMDFile
