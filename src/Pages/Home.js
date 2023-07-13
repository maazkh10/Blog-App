import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MDBRow, MDBCol, MDBContainer, MDBTypography } from 'mdb-react-ui-kit';
import { toast } from 'react-toastify';
import Blog from '../components/Blog';
import Search from '../components/Search';
import Category from '../components/Category';
import NightModeToggle from '../components/NightModeToggle';
import '../NightMode.css';
const Home = () => {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const options = ['Travel', 'Fashion', 'Fitness', 'sports', 'Food', 'Tech'];

  useEffect(() => {
    loadBlogsData();
  }, []);

  const loadBlogsData = async () => {
    const response = await axios.get('http://localhost:5000/blogs');
    if (response.status === 200) {
      setData(response.data);
    } else {
      toast.error('something went wrong');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure that you want to delete the blog?')) {
      const response = await axios.delete(`http://localhost:5000/blogs/${id}`);
      if (response.status === 200) {
        toast.success('Blog Deleted Successfully');
        loadBlogsData();
      } else {
        toast.error('something went wrong');
      }
    }
  };

  const excerpt = (str) => {
    if (str.length > 50) {
      str = str.substring(0, 50) + ' ... ';
    }
    return str;
  };

  const onInputChange = (e) => {
    if (!e.target.value) {
      loadBlogsData();
    }
    setSearchValue(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await axios.get(`http://localhost:5000/blogs?q=${searchValue}`);
    if (response.status === 200) {
      setData(response.data);
    } else {
      toast.error('Something Went Wrong');
    }
  };

  const handleCategory = async (category) => {
    const response = await axios.get(`http://localhost:5000/blogs?category=${category}`);
    if (response.status === 200) {
      setData(response.data);
    } else {
      toast.error('Something went wrong');
    }
  };
  
  
  

  return (
    <>
      <Search searchValue={searchValue} onInputChange={onInputChange} handleSearch={handleSearch} />
      <NightModeToggle />
      <MDBRow>
        {data.length === 0 && (
          <MDBTypography className="text-center mb-0" tag="h2">
            No Blog Found
          </MDBTypography>
        )}
        <MDBCol>
          <MDBContainer>
            <MDBRow>
              {data &&
                data.map((item, index) => {
                  return (
                    <Blog key={index} {...item} excerpt={excerpt} handleDelete={handleDelete} />
                  );
                })}
            </MDBRow>
          </MDBContainer>
        </MDBCol>
        <MDBCol size="3">
          <Category option={options} handleCategory={handleCategory } />
        </MDBCol>
      </MDBRow>
    </>
  );
};

export default Home;
