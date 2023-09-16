import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import MarkedBlogs from './components/MarkedBlogs/MarkedBlogs';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      return toast.error('already Exist.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }else{
      selectedBlogs.forEach(time =>{
        totalHours += time.credit;
        totalPrice += time.price;
      })

      const creditHours = creditRemainingHours - blogs.credit;

      if(creditHours < 0){
        return toast.error("No more Credit hours left", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
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
      <div className='flex flex-col lg:flex-row gap-4'>
        <Blogs handleSelectedBlogs={handleSelectedBlogs}></Blogs>
        <ToastContainer />
        <MarkedBlogs selectedBlogs={selectedBlogs} availableHours={availableHours} creditRemainingHours={creditRemainingHours} blogsPrice={blogsPrice}></MarkedBlogs>
      </div>
      
    </>
  )
}

export default App
