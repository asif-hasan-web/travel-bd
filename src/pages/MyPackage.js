import { Button } from 'bootstrap'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Card, Col, Container, Row, Table } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const MyPackage = () => {
   
    const [plans,setPlan] =useState([])

   

    useEffect(()=>{
        fetch("https://evening-crag-32826.herokuapp.com/mypackage")
        .then((res) => res.json())
        .then((result)=>setPlan(result))
    },[])


     //DElete an plan
     const handleDeleteplan = (id) =>{
        const url = `https://evening-crag-32826.herokuapp.com/delete/${id}`;
        fetch(url, {
            method:'DELETE'
        })
        .then(res =>res.json())
        .then(data =>{
            if(data.deletedCount> 0){
                alert('deleted sucessfully');
                const remainingPlans = plans.filter(plan=> plan._id !== id)
                setPlan(remainingPlans)
            }
        })
    }

    // console.log(plans);
    return (
        <div>
      <h1 className="text-center py-5">MY all Plans : {plans?.length}</h1>
      <Table striped bordered hover   >
        <tbody>
          <tr>
            <th>#</th>
            <th>Package Name</th>
            <th>Total Cost</th>
            <th>Status</th>
            <th>Action</th>
          </tr>0
        </tbody>
        {plans?.map((pd, index) => (
          <tbody>
            <tr >
              <td>{index}</td>
              <td>{pd?.location}</td>
              <td>{pd?.price}</td>
              <td className=" text-primary " >Pending</td>
              <td><button onClick={()=> handleDeleteplan (pd._id)}className="btn bg-danger">Delete</button></td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
    
    
    )
}

export default MyPackage
