import React, { useEffect, useState } from "react";

const Useonlinestatus = () => {
    const [status,setStatus] = useState(navigator.onLine)
    useEffect (() => {
addEventListener("online",()=>{
    setStatus(true)
})
addEventListener("offline",()=>{
    setStatus(false)
})
    },[status])
    return(status)
}
export default Useonlinestatus