
import './App.css';
import { Routes, BrowserRouter,Route   } from "react-router-dom"
import Home from './Pages/Home'
import AddEditBlog from './Pages/AddEditBlog'
import Blog from './Pages/Blog'
import About from './Pages/About'
import Notfound from  './Pages/Notfound'
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Header from './components/Header';
function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <Header />
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/addBlog' element={<AddEditBlog />} />
        <Route path='/editBlog' element={<AddEditBlog  />} />
        <Route path='/blog/:id' element={<Blog />} />
        <Route path='/about' element={<About />} />
        <Route path='/+' element={<Notfound />} />
        </Routes>
        </div>
    </BrowserRouter> 
    
  );
}

export default App;
