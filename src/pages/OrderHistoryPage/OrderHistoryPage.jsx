import React from 'react'
import { checkToken } from '../../utilities/users-service'

const OrderHistoryPage = () => {
  async function handleCheckToken() {
    const expDate = await checkToken()
    console.log(expDate)
  }

  return (
    <>
      <h1>Order History Page</h1>
      <button onClick={ handleCheckToken }>Check When My Login Expires</button>
    </>
  )
}

export default OrderHistoryPage