import React from 'react'
import "../ProductList/List.scss"
import "../Card/Card.scss"
import Card from '../Card/Card'
import Loading from '../Loading/Loading'
import { useSelector } from 'react-redux'


function ProductList({data}) {
  const {products, loading , error, categoryList} = useSelector((state) => state.products)

  if(loading) {
    return <Loading/>
  }
  return (
    <div className='product container'>
      {
        data.map((item) => (
          <Card key={item.id} pro={item}/>
        ))
      }
    </div>
  )
}

export default ProductList

