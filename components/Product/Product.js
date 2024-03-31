import React,{useState,useEffect,useRef} from 'react'

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import DialogProdut from './Popup'

function Product() {
  const [Variation,setVariation] = useState([{
    id: 1,
    title: "Product 1",
    description: "This is a description for Product 1.",
    orginal_price: 10,
    discount: 5,
    promotion_type: "Sale",
    quantity: 100,
    unit: "pcs",
    parent_images: [
      {
        id: 1,
        image: "https://images.pexels.com/photos/18254876/pexels-photo-18254876/free-photo-of-waves-by-the-rocky-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        id: 2,
        image: "https://images.pexels.com/photos/19294343/pexels-photo-19294343/free-photo-of-pink-car.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
      }
    ],
    child_product: [
      {
        id: 11,
        title: "Child Product 1",
        description: "This is a description for Child Product 1.",
        orginal_price: 50,
        discount: 10,
        promotion_type: "Sale",
        quantity: 50,
        unit: "pcs",
        parent_images: [
          {
            id: 1,
            image: "https://images.pexels.com/photos/18254876/pexels-photo-18254876/free-photo-of-waves-by-the-rocky-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          },
          {
            id: 2,
            image: "https://images.pexels.com/photos/19294343/pexels-photo-19294343/free-photo-of-pink-car.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          }
        ]
      },
      {
        id: 12,
        title: "Child Product 2",
        description: "This is a description for Child Product 2.",
        orginal_price: 800,
        discount: 15,
        promotion_type: "Sale",
        quantity: 70,
        unit: "pcs",
        parent_images: [
          {
            id: 1,
            image: "https://images.pexels.com/photos/18254876/pexels-photo-18254876/free-photo-of-waves-by-the-rocky-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          },
          {
            id: 2,
            image: "https://images.pexels.com/photos/19294343/pexels-photo-19294343/free-photo-of-pink-car.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Product 2",
    description: "This is a description for Product 2.",
    orginal_price: 20,
    discount: 8,
    promotion_type: "Sale",
    quantity: 80,
    unit: "pcs",
    parent_images: [
      {
        id: 1,
        image: "https://images.pexels.com/photos/7945944/pexels-photo-7945944.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
      },
      {
        id: 2,
        image: "https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?auto=compress&cs=tinysrgb&w=600"
      }
    ]
  },
  {
    id: 3,
    title: "Product 3",
    description: "This is a description for Product 3.",
    orginal_price: 1500,
    discount: 12,
    promotion_type: "Sale",
    quantity: 120,
    unit: "pcs",
    parent_images: [
      {
        id: 1,
        image: "https://images.pexels.com/photos/7945944/pexels-photo-7945944.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
      },
      {
        id: 2,
        image: "https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg?auto=compress&cs=tinysrgb&w=600"
      }
    ]
  }


])
  return (
    
    <>
    <div className='card flex flex-wrap space-x-2 mx-5 mt-10'>
     {Variation.map((product)=>(
      <div key={product.id}>
            <div className='product w-44 shadow-lg p-2 rounded-lg shadow-slate-400'>
      <div className='image relative'>
        <div className='absolute bg-[#d35400] p-1 text-white'>pending</div>
        
        <img
        src={"https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
        className='w-44 rounded-lg'
        />
      </div>
      <div className='product_title'>{product.title}</div>
      <div className='product_price'>$ {product.orginal_price}</div>
      <div className='product_variation'>{product.unit}</div>
       <div className='mt-2 flex justify-center'>
        <DialogProdut  variation_product={product}/>
       </div>

    </div>

    
      
      
      </div>
     ))}



 
    
    </div>
    </>
  )
}

export default Product