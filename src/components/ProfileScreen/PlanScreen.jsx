import React, { useEffect, useState } from 'react'
import db from '../firebase'
import './PlanScreen.css'

function PlanScreen() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        db.collection("products").where('active','==',true)
        .get().then(querySnapshot => {
            const products = {};
            querySnapshot.forEach(async (productDoc) => {
                products[productDoc.id] = productDoc.data();
                const priceSnap = await productDoc.ref.collection("price").get();
                priceSnap.docs.forEach(price => {
                  products[productDoc.id].price = {
                    price: price.data()
                  }
                })
            })
            setProducts(products);
        })
    }, [])

    console.log(products)

  return (
    <div className='planScreen'>
      {Object.entries(products).map(([productId, productData]) => {
        return(
          <div className="planScreen__plan" key={productId}>
            <div className="planScreen__info">
              <h3>{productData.name}</h3>
              <h4>{productData.description}</h4>
            </div>

            <button>Subscribe</button>
          </div>
        )
      })}
      
    </div>
  )
}

export default PlanScreen
