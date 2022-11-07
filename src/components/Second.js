import * as React from 'react';
import { useState } from "react";
import config from "../config.json"



function Second(){
  
   // console.log(config.components[1].style);

    const [style,setstyle]=useState(config.components[1].style)



return(
<div>
    <pre></pre> 
  {config.components[1].style.map((item)=>{
    return(
       
 <button  className={item.class}>{item.name}</button>
        
    )
  })}
  
   


  <pre></pre>

 

</div>
);


}
export default Second;