import React from 'react'

const YourCard = () => {
  return (
    <div className='your-cart-container'>
      <h1 className="cart-title">Your Cart (0)</h1>
      <div className="cart-items">
        <img src="/images/illustration-empty-cart.svg" alt="" />
        <p>Your added items will appear here</p>
      </div>
    </div>
  )
}

export default YourCard