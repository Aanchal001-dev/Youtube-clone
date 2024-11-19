  const API_KEY='AIzaSyDUQ1actCf3OaKCWDXsvGEUqbQKeHUJAkA'
 const value_converter=(value)=>{
    if (value>=1000000) {
        return  Math.floor(value/1000000)+"M"
        
    }
    else if(value>=1000)
    {return Math.floor(value/1000)+"K"

    }
    else{
        return value;
    }
 }

//  export default  data 
 export { value_converter ,API_KEY}