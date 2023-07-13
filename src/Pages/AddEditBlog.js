import React, {useEffect, useState} from 'react'
import { MDBValidation, MDBInput, MDBBtn } from "mdb-react-ui-kit"
import {useNavigate, useParams } from "react-router-dom"
import axios from 'axios'
import { toast } from 'react-toastify'
import '../index.css'
//vbrzwhio

const initialState = {
  title: "",
  description: "",
  category: "",
  imageUrl: ""
}
const options = ["Travel", "Fashion","Fitness","sports", "Food", "Tech"];

const AddEditBlog =() => {
  const[formValue, setFormValue] = useState (initialState);
  const[ categoryErrmsg, setCategoryErrmsg] = useState (null);
  const[ editMode, setEditMode] = useState (false);
  const{title, description, category,imageUrl} = formValue;
 
  const navigate = useNavigate();
   
  const {id} = useParams();
   
  useEffect(() => {
    if(id) {
      setEditMode(true);
      getSingleBlog(id);

    }else {
      setEditMode (false);
      setFormValue({ ...initialState});
    }
   }, [id]);

  const getSingleBlog = async (id) => {
    const singleBlog = await axios.get(`http://localhost:5000/blogs/${id}`);
    if (singleBlog.status === 200) {
      setFormValue ({...singleBlog.data});
    }else {
      toast.error("Something Went wrong");
    }
   
  };



  const getDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() +1).padStart(2, "0");
    let yyyy = today.getFullYear(); 

    today= mm + "/"+ dd + "/" + yyyy;
    return today;
  }
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!category) {
      setCategoryErrmsg("please select a category");
    }
    if (title && description && imageUrl && category){
      const currentDate = getDate();
      const updateBlogData = {...formValue, date: currentDate};
      const response = await axios.post("http://localhost:5000/blogs" , updateBlogData);
      if(response.status === 201){
        toast.success("Blog Created Successfully")
      } else {
        toast.error ("Something went wrong")
      }
      setFormValue({title: "", description:"", category:"", imageUrl:""})
      navigate("/");
    }
  };

  const onInputChange =(e) => {
    let {name , value} = e.target;
    setFormValue({ ...formValue, [name]:value});
  };

  const onUploadImage = (file) =>{
    console.log("file", file);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "vbrzwhio");
    axios.post("http://api.cloudinary.com/v1_1/druzfwqpe/image/upload", formData)
    .then((resp) => {
       toast.info("Image Uploded Successfully");
       setFormValue({ ...formValue, imageUrl:  resp.data.url});

    })
    .catch((error) => {
      toast.error ("Something went Wrong");
    })
  };

  const onCategoryChange =  (e) => {
    setCategoryErrmsg (null);
    setFormValue({ ...formValue, category: e.target.value});

  };
  return (
    <div className="add-edit-blog-container"
    >
   <MDBValidation 
   
   className='row g-3'
   style={{margin: "100px"}}
   noValidate
   onSubmit={handleSubmit}
    >
      <p
      style={{color:"blue",
       }} 
       className='fs-2 fw-bold'>{editMode ? "Update Blog" :"Add Blog"}</p>
      <div 
      style={{
        margin: "auto",
        padding: "30px",
        maxWidth: "400px",
        fontSize: "20px",
        alignContent: "center",
      }}
      >
     <MDBInput
     value={title}
      name="title"
      type="text"
      onChange={onInputChange}
      required
      label="Title"
      Validation= "Please Provide a title"
      invalid
      />
        <br />

        <MDBInput
  value={description || ""}
  name="description"
  type="text"
  onChange={onInputChange}
  
  label="Description"
  validation="Please provide a description"
  textarea
  rows={4}
/>

        <br />
        <MDBInput 
        type="file"
        onChange={(e) => onUploadImage(e.target.files[0])}
        required
        Validation="please provide a title"
        invalid
        />
        <br />
        <select className='categoryDropdown' style={{
          width: "100%",
         height: "35px",
          fontSize: "20px"
        }}
        onChange={onCategoryChange}
        value={category}
        >
          <option>Please select Category</option>
          {options.map((option, index) => (
            <option value={option || ""} key={index}>
              {option}
            </option>
          ))}
        </select>
        {categoryErrmsg && (
          <div className="categoryErrorMsg">
            {categoryErrmsg}
          </div>
        )}
        <br />
        <br />
        <MDBBtn type='submit' style={{margin:"10px"}}>Add</MDBBtn>
        <MDBBtn color='danger' style={{margin:"10px"}} 
        onClick={()=> navigate("/")}
        >Go Back</MDBBtn>
      </div>
    </MDBValidation>

    </div>
  )
}

export default AddEditBlog
