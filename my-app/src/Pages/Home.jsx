import React, { useState } from 'react'
import "../Pages/Home.css"
import SideBar from '../Components/SideBar/SideBar'  // Correct import
import Feed from '../Components/Feed/Feed'

const Home = ({sidebar}) => {
  const[category,setCategory]=useState(0);
  return (
    <>
      <SideBar sidebar={sidebar} category={category} setCategory={setCategory}/>  {/* Render SideBar component */}
      <div className={`container${sidebar?"":'large-conatiner'}`}> </div>
      <Feed catogory={category}/>
    </>
  )
}

export default Home
