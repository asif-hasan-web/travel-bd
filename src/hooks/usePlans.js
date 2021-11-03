import  { useEffect } from 'react'
import { useState } from 'react'

const usePlans = () => {
    const [plans, setPlans]= useState([])
    useEffect(()=>{
        fetch("https://evening-crag-32826.herokuapp.com/plans")
        .then((res) =>res.json())
        .then((data) => setPlans(data))
    },[])

    return {plans, setPlans}
}

export default usePlans
