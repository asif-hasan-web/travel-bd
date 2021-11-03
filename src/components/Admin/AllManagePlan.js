import React, { useEffect, useState } from 'react'

const AllManagePlan = () => {

    const [plans, setplans] = useState([]);
  const [reload, setReload] = useState(true);
  
  useEffect(() => {
    fetch("https://evening-crag-32826.herokuapp.com/managePlan")
      .then((res) => res.json())
      .then((data) => setplans(data));
  }, [reload]);

  //cancle confirm
  function cancel(id) {
    const confirmation = window.confirm("Are you sure to delete!!");
    if (confirmation) {
      fetch(`https://evening-crag-32826.herokuapp.com/delete/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount === 1) {
            const remainingplans = plans.filter((plan) => plan._id !== id);
            setplans(remainingplans);
          } else {
            alert("Something went wrong!!");
          }
        });
    }
  }

  //COnfirm button click then chance status 
  function confirmHandler(id) {
    const confirmation = window.confirm("Are you sure to confirm!!");
    if (confirmation) {
      fetch(`https://evening-crag-32826.herokuapp.com/confirmation/${id}`, {
        method: "put",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount === 1) {
            setReload(!reload);
          } else {
            alert("Order already confirmed!!");
          }
        });
    }
  }

    return (
        <div>
        <h1 className="text-center">Total Plans booking  : {plans.length}</h1>
        <table className="table table-hover w-100">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">Email</th>
              <th scope="col">Number</th>
              <th scope="col">Price</th>
              <th scope="col">Status</th>
              <th scope="col">Cancellation</th>
              <th scope="col">Confirmation</th>
            </tr>
          </thead>
          <tbody>
            {plans.map((order) => {
              const { address, _id, number, price, name, email, status } = order;
              return (
                <tr key={_id}>
                  
                  <td>
                    <h6>{name}</h6>
                  </td>
                  <td>{address}</td>
                  <td>{email}</td>
                  <td>{number}</td>
                  <td>{price}</td>
                  <td>{status}</td>
                  <td>
                    <button
                      onClick={() => cancel(_id)}
                      className="btn btn-danger"
                    >
                      Cancel
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => confirmHandler(_id)}
                      className="btn btn-success"
                    >
                      Confirm
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    
    )
}

export default AllManagePlan
