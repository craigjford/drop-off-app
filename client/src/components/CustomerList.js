import React from 'react'

const CustomerList = ({ customers }) => {

  const customerList = customers.map(cust => <ul key={cust.id}>{cust.name}  {cust.address}  {cust.city}  {cust.phone}</ul>)

  return (
    <ul>
        {customerList}
    </ul>
  )
}

export default CustomerList