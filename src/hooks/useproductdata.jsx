import React, { useEffect, useState } from "react";
const Useproductdata = () =>
{
    const [data ,setData] =useState();
      const [loading , setLoading] = useState(true);
    
      useEffect(()=>{
        console.log("run useeffect ")
        fetchdata();
      },[]);
    
    
    
    const fetchdata = async ()=>
    {
      try{
        setLoading(true);
        const res = await fetch ("https://dummyjson.com/products")
      const data = await res.json();
      console.log(data.products);
      setData(data.products);
      }catch(error){
        console.log("error occured")
      }
      finally
      {
        setLoading(false)
      }
    };
    return({data,loading})
}
export default Useproductdata