import React from 'react'

 const products = [
    { id: 1, name: "Phone", price: "$699" },
    { id: 2, name: "Laptop", price: "$1200" },
    { id: 3, name: "Headphones", price: "$199" },
  ];


const UserInfo = () => {
  return (
    <div>
      {
        products.map((p)=>(
            <div key="p.id">
                   <h2>{p.name}</h2>
                <h3>{p.price}</h3>
            </div>
        ))
      }
    </div>
  )
}

export default UserInfo

