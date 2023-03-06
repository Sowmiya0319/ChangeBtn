import React from "react";
import {useState,useEffect} from 'react';


function Video(){
    const [a,setA]=useState(0);
    useEffect(()=>{
        setTimeout(()=>{
            if(a===10){
                alert(" Movie Started");
                setA((a)=>a+1);
            }
            else if(a===30)
            {
                alert("Interval");
                setA((a)=>a+1);
            }
            else if(a===100)
            {
                alert("Movie Completed");
                
            }
            else{
            setA((a)=>a+1);
            }
            

        },100);

    })

    
    return(
        <div>
  
        
        </div>
    )

}
export default Video;
