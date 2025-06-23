import { useState ,useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Filter from './components/Filter.jsx'
import Cards from './components/Cards.jsx'
import './App.css'
import {filterData , apiUrl} from './data.js'
import {toast} from 'react-toastify'
import Spinner from './components/Spinner.jsx'

function App() {
  const [courses, setCourses] = useState(null)
  const [loading , setLoading] = useState(true);
  const [category , setCategory] = useState(filterData[0].title);

  async function fetchData() {

    setLoading(true)

      try{
        let response = await fetch(apiUrl);
        let data = await response.json();
        setCourses(data.data);

      }catch(error){
        console.log(error)
        toast.error("Error Occured in app.jsx");
      }
      setLoading(false)

  }
  
  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div className="min-h-screen flex flex-col">
      <div>
        <Navbar/>
      </div>
      

      <div className="bg-slate-700">
        <div>
        <Filter category = {category} setCategory={setCategory}filterData = {filterData}/>
      </div>

      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh] ">
        { loading ? <Spinner/> : <Cards courses={courses}/> }
      </div>
      </div>
      
    </div>
  )
}

export default App
