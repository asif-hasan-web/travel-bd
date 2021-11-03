import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AddPlan from '../components/Admin/AddPlan'
import AllManagePlan from '../components/Admin/AllManagePlan'

const Admin = () => {

    const [active,setActive] = useState('All Plans Managers')
    console.log(active);

    return (
        <div>
            <Container>
                <Row className="my-5">
                    <Col sm={5} md={4} lg={3}>
                    <div className="" >
                        <ul className="list-unstyled bg-secondary rounded  p-5">
                            <li className="  mb-2 ">
                                <input
                                 onClick={()=>setActive("All Plans Managers")}
                                className={active === "All Plans Managers"?'d-block w-100 p-2 btn btn-primary text-white': 'd-block w-100 p-2'}
                                type="button"
                                value="All Plans Managers" />
                                </li>
                            <li className="w-100 mb-2 ">
                                <input
                                 onClick={()=>setActive("Add New Plan")}
                                  className={active === "Add New Plan"?'d-block w-100 p-2 btn btn-primary text-white': 'd-block w-100 p-2'}
                                type="button"
                                value="Add New Plan" />
                                </li>
                        </ul>
                    </div>
                    </Col>
                    <Col sm={7} md={8} lg={9}>
                        {
                       ( active === "All Plans Managers" && <AllManagePlan/> )||
                       ( active === "Add New Plan"&& <AddPlan/>)
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Admin
