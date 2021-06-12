import React, {useState}from "react";


const ChangeCurrency = () => {

const [total, setTotal]=useState(0); 
const[taxDay, setTaxDay]=useState(0); 
const[changeCurreny, setchangeCurrency]=useState(0); 

const calculate =(taxDay,changeCurreny)=>{
    let result= changeCurreny/taxDay; 
    console.log(result); 
    setTotal(result); 
    setTaxDay(taxDay); 
    setchangeCurrency(changeCurreny); 

}


  return (
    <div className="container">
      <h1>Currency Change</h1>
      <label>Tax</label>
      <input type="number" 
        placeholder="Tax" 
        onChange={(e)=>{ calculate(e.target.value, changeCurreny)}}
    
        />
      <input type="number" 
        placeholder="$MX" 
        onChange={(e)=>{ calculate(taxDay, e.target.value)}}
        />
      <input type="number" 
        placeholder="$USA" 
        disabled 
        value={total}

        />
        
    </div>
  );
};

export default ChangeCurrency;
