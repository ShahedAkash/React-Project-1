import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import MarkedBlogs from './components/MarkedBlogs/MarkedBlogs';

function App() {

  const [selectedBlogs, setSelectedBlogs] = useState([]);
  const [creditRemainingHours, setCreditRemainingHours] = useState(20);
  const [availableHours, setAvailableHours] = useState(0);
  const [blogsPrice, setBlogsPrice] = useState(0);

  const handleSelectedBlogs = blogs => {
    const isExist = selectedBlogs.find(existId => existId.id === blogs.id);
    let totalHours = blogs.credit;
    let totalPrice = blogs.price;
    

    if(isExist){
      return alert("already Exist.")
    }else{
      selectedBlogs.forEach(time =>{
        totalHours += time.credit;
        totalPrice += time.price;
      })

      const creditHours = creditRemainingHours - blogs.credit;

      if(creditHours < 0){
        return alert("No more Credit hours left") 
      }else{
        setAvailableHours(totalHours);
        setCreditRemainingHours(creditHours);
        setBlogsPrice(totalPrice);
        const forBlogsContainer = [...selectedBlogs, blogs];
        setSelectedBlogs(forBlogsContainer);
      }
      
    }
    
  } 

  return (

    <>
      
      <h1 className=' text-3xl font-bold text-center my-10'>Course Registration</h1>
      <div className='flex gap-4'>
        <Blogs handleSelectedBlogs={handleSelectedBlogs}></Blogs>
        <MarkedBlogs selectedBlogs={selectedBlogs} availableHours={availableHours} creditRemainingHours={creditRemainingHours} blogsPrice={blogsPrice}></MarkedBlogs>
      </div>
      
    </>
  )
}

export default App
