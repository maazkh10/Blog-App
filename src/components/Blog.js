import React from 'react'
import {
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBBtn,
  MDBIcon,
  MDBCardTitle,
} from "mdb-react-ui-kit"
import Badge from './Bage'
import { Link } from "react-router-dom"

const Blog=({title, category, description, id, imageUrl, excerpt, handleDelete})=> {

  return (
    <MDBCol size="4">
      <MDBCard className='h-100 mt-2' style={{maxWidth: "22rem"}}>
        <MDBCardImage 
        src={imageUrl}
        alt={title}
        position='top'
        style={{maxWidth:"100%", height: "180px"}}
        />
        <MDBCardBody>
          <MDBCardTitle>{title}</MDBCardTitle>
          <MDBCardText>
            {excerpt(description)}
            <Link to={`/blog/${id}`} >Read More</Link> 
          </MDBCardText>
          <Badge>{category}</Badge>
          <span>
          <MDBBtn className="mt-1" tag="a" color="blue" onClick={() => handleDelete(id)}>
              <MDBIcon icon="trash-alt" style={{ color: '#dd4b39', fontSize: '1.5rem', marginRight: '0.5rem' }} />
            </MDBBtn>
            <Link  to= {`/edit/Blog/${id}`} >
            <MDBIcon
            fas
           icon="edit"
          style={{ color: "blue", marginLeft: "10px" }} // Change the color and other styles as needed
        size="lg"
/>
            </Link>
          </span>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default Blog