import React from 'react'

function ProductItem(props) {
    const {title,thumbnail,price} = props.porductData;
  return (
    <div>
      <div className='thumb'>
        <img src={thumbnail} alt={title} />
      </div>
      <div className='content'>
        <h2>{title}</h2>
        <h3>{price}</h3>
        <button>Add to cart</button>
      </div>
    </div>
  )
}

export default ProductItem
