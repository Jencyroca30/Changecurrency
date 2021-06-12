import React, {useEffect, useState} from 'react'; 

const Info=()=>{

    const [news, setNews]= useState({}); 
    useEffect( ()=>{
        fetch('https://s3.amazonaws.com/dolartoday/data.json')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setNews(data)
         });
    },[])
    return(
        <div className="container">
           <h1>News</h1> 
          <p> Dolar Today:{news?.USD?.dolartoday}  <span>BsS</span></p>
          <p> Bicoin:{news?.USD?.bitcoin_ref}  <span>BsS</span></p>
          <p> Cencoex:{news?.USD?.cencoex}  <span>BsS</span></p>
          <p> Efectivo:{news?.USD?.efectivo}<span>BsS</span></p>
          <p> Efectivo Real:{news?.USD?.efectivo_real}  <span>BsS</span></p>
        </div>
    )

}

export default Info; 