import React from 'react'

export default function CartItem({ item, value }) {
    const { id, price, title, image, total, count } = item
    const { increment, decrement, removeItem } = value
    return (
        <div className='row my-4 text-capitalize text-center'>
            <div className='col-10 mx-auto col-lg-2 '>
                <img src={image} className='img-fluid' style={{width: '5rem', height: '5rem'}}/>
            </div>
            <div className='col-10 m-auto col-lg-2 '>
               <span className='d-lg-none'>product: </span>
               {title}
            </div>
            <div className='col-10 m-auto col-lg-2'>
                <span className='d-lg-none'>price: </span>
                {price}
            </div>
            <div className='col-10 mx-auto col-lg-2 my-2 my-lg-auto'>
                <span className='btn btn-black mx-1' onClick={() => decrement(id)}>
                    -
                </span>
                <span className='btn btn-black mx-1'>{count}</span>
                <span className='btn btn-black mx-1' onClick={() => increment(id)}>
                    +
                </span>
            </div>
            <div className='col-10 m-auto col-lg-2'>
                <div className='cart-icon' onClick={() => removeItem(id)}>
                    <i className='fas fa-trash' />
                </div>
            </div>
            <div className='col-10 m-auto col-lg-2'>
                <strong>item total: ${total}</strong>
            </div>
        </div>
    )
}

