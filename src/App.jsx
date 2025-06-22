import { useState ,useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Filter from './components/Filter.jsx'
import Cards from './components/Cards.jsx'
import './App.css'
import {filterData , apiUrl} from './data.js'
import {toast} from 'react-toastify'

function App() {
  const [courses, setCourses] = useState(null)

  useEffect(()=>{
    const fetchData = async() =>{

      try{
        const res = await fetch(apiUrl);
        const data = res.json();
        console.log(data);
        setCourses(data.data);

      }catch(error){
        console.log(error)
        toast.error(error);
        

      }

    }

    fetchData();

  },[])

  return (
    <div>
      <Navbar/>


      <Filter filterData = {filterData}/>


      <Cards courses={courses}/>
    </div>
  )
}

export default App
