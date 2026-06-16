import React, {useState} from 'react';

interface CartItem{
  productId: number;
  name: string;
  price: number;
  quantity: number;
}

function App() {

  const [cart, setCart] = useState<Map<number, CartItem>>(new Map());

  const addToCart = (product: {id:number; name: string; price:number})=>{
    setCart(prevCart => {
      const newCart = new Map(prevCart);
      const existing = newCart.get(product.id);

      if(existing){
        existing.quantity += 1;
      }else{
        newCart.set(product.id,{
          productId: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
        });
      }
      return newCart;
    });
  };

  const updateQuantity = (productId:number, quantity:number)=>{
    setCart(prevCart =>{
      const newCart = new Map(prevCart);
      const item = newCart.get(productId);
      if(item){
        item.quantity = quantity;
      }
      return newCart;
    });
  };

  const getTotal = (): number =>{
    return Array.from(cart.values()).reduce((sum,item)=>sum+ item.price * item.quantity, 0);
  };

  // return(
  //   <div style={{padding: '20px'}}>
  //     <h1>Shopping Cart</h1>
  //     <button onClick={()=>addToCart({id: 1, name: 'Laptop',price:1000})}>Add Laptop ($1000)</button>
  //     <button onClick={()=>addToCart({id: 2, name:'Mouse', price:25})} style={{marginLeft:'10px'}}>Add Mouse ($25)</button>
  //     <div style={{marginTop:'20px'}}>
  //       <h2>cart Items:</h2>
  //       {cart.size === 0? <p>Cart is empty</p>:(
  //         <ul></ul>
  //       )}
  //     </div>
  //   </div>
  // )

   return (
    <div style={{ padding: '20px' }}>
      <h1>Shopping Cart</h1>
      <button onClick={() => addToCart({ id: 1, name: 'Laptop', price: 1000 })}>
        Add Laptop ($1000)
      </button>
      <button onClick={() => addToCart({ id: 2, name: 'Mouse', price: 25 })} style={{ marginLeft: '10px' }}>
        Add Mouse ($25)
      </button>
      <div style={{ marginTop: '20px' }}>
        <h2>Cart Items:</h2>
        {cart.size === 0 ? <p>Cart is empty</p> : (
          <ul>
            {Array.from(cart.values()).map((item) => (
              <li key={item.productId}>
                {item.name} - ${item.price} × {item.quantity}
                <button 
                  onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                  style={{ marginLeft: '10px' }}
                >
                  +
                </button>
                <button 
                  onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                  style={{ marginLeft: '5px' }}
                >
                  -
                </button>
              </li>
            ))}
          </ul>
        )}
        <h3>Total: ${getTotal()}</h3>
      </div>
    </div>
  );
}


export default App;