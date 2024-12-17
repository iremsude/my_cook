import React, {useState, useEffect}from 'react'
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";



const Navbar = ({setFood}) => {
  const[search,setSearch]= useState(" ");

  const handleKeyDown =(e)=>{
    if(e.key === 'Enter'){
      searchRec(e);
    }
  }
  useEffect( () =>{
    searchRec();
  },[])
  const searchRec = async () => {
    fetch(`https://api.edamam.com/search?q=${search}&app_id=c339477a&app_key=9c441dab38c29859f063d56e0e8019cb&to=30`)
    .then(response => response.json())
    //gelen veriyi json a çevir demek
    .then(data => setFood(data.hits))
    //json formatına çevrilmiş verileri data parametresiyle consola yazdırılır
    .catch(error => console.log(error))
    //hata dönerse tut
  }


  return (
    <div className='h-16 bg-red-0 flex justify-around items-center border-b-2 border-lime-700 '>
        <img src= "/images/logo2.jpeg" className='h-14'/>
        <Link to="./">Home</Link>
        <Link to="./Ingredients">Ingredients</Link>
        <Link to="./Receipts">Receipts</Link>
        <Link to="./About">About Us</Link>

       <div className='flex  '>
       <input 
       value={search} onKeyDown={(e)=> handleKeyDown(e)} onChange={e=> setSearch(e.target.value)}
       type="text" name='username' placeholder="Search..."
       className='focus:outline-none h-6 bg-gray-100  rounded-l-lg text-gray-900 text-sm rounded- w-[300px] ps-6  '
     />
     <button className='h-[24px] w-[24px] bg-gray-100  rounded-r-lg ' >
     <BsSearch />
     </button>

     </div>
     </div>
  
  )
}

export default Navbar