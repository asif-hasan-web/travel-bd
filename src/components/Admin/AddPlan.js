import axios from 'axios';
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form';

const AddPlan = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        axios.post('https://evening-crag-32826.herokuapp.com/plans'
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
            <Container>
                <Row>
                    <Col>
                        <h3> Add a New Travel Plan </h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                                    <input className="p-2 mb-3" type="url" {...register("picture",{ required: true })} placeholder="img url" />
                                    <br />
                                     <input className="p-2 mb-3"  type="name" {...register("name",{ required: true })} placeholder="Enter  name" />
                                    <br />
                                    <input label="First Name" className="p-2 mb-3"  type="price" {...register("price",{ required: true })} placeholder="Price"   />
                                    <br />
                                    <textarea className="p-2 mb-3" type="text" {...register("about", { required: true })}  placeholder="Description" />
                                    <br />
                                   
                                    {errors.exampleRequired && <span>This field is required</span>}
                                    <br />
                                    <input type="submit" className="btn btn-success" value="book confirm" />
                                </form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AddPlan
