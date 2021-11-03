import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

const Booking = () => {
   
    const {id} = useParams();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [plan, setplan]=useState({})
    
    useEffect(() => {
        fetch(`https://evening-crag-32826.herokuapp.com/bookingplan/${id}`)
        .then(res => res.json())
        .then(data =>{
            if(data._id){
                
                setplan(data)
            }else{
                alert('somethings wrong')
            }
        })
      },[plan]);


    const onSubmit = (data) => {
        axios.post('https://evening-crag-32826.herokuapp.com/bookingplan'
        , data)
        .then(res=>{
            console.log(res.data)
            alert('succesfully added')
            reset()
        })
        console.log(data) 

    };

    return (
        <div>

             <div className="text-center ">

                    
                 <img className="img-fluid w-100" style={{height:"240px"}}  src="https://i.ibb.co/9nyn88q/bangladesh-banner.jpg" alt="benner booking" />
                <Container>
                <Card className='py-5'>
                        <Row>
                            <Col md={6}>
                                <Card.Img variant="top" className="img-fluid" style={
                                {height: '250px',
                                width: '400px',
                                margin: 'auto'}} 
                                src={plan.picture} />
                                
                            <Card.Body >
                                <Card.Text  className="my-5">
                                    <h4> <span className="text-info"> {plan.name}</span></h4>
                                    <br />
                                    <p>{plan.about}</p>
                                    <h1 >Price Per Person: <span className="text-danger"> BDT {plan.price} </span> </h1>
                                </Card.Text>
                                </Card.Body>
                                
                            </Col>
                            <Col md={6}>
                                <h1>Please Confirm Your Booking</h1>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                     <input className="p-2 mb-3"  type="location" {...register("location",{ required: true })} value={plan.name} readOnly  />
                                    <br />
                                    <input className="p-2 mb-3"  type="price" {...register("price",{ required: true })} value={plan.price}  readOnly />
                                    <br />
                                    <input className="p-2 mb-3" type="name" {...register("name", { required: true })}  placeholder="Enter your name" />
                                    <br />
                                    <input className="p-2 mb-3" type="email" {...register("email",{ required: true })} placeholder="Enter your email" />
                                    <br />
                                    
                                    <input className="p-2 mb-3" type="address" {...register("address",{ required: true })} placeholder="your address" />
                                    <br />
                                    <input className="p-2 mb-3" type="number" {...register("number", { required: true })} placeholder="Enter your number" />
                                    {errors.exampleRequired && <span>This field is required</span>}
                                    <br />
                                    <input type="submit" className="btn btn-success" value="book confirm" />
                                </form>
                            </Col>
                        </Row>
                    </Card>
                </Container>
            </div>
        </div>
    )
}

export default Booking
