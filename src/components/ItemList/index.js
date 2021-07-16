import React, {useState, useEffect} from 'react';
import ItemTemplate from '../Item';



export default function ItemList() {

    const [items, setItems] = useState([]);

    useEffect( () => {
        call();
    }, []);

    const call =  async () =>{
        const products = await fetch('datos/data.json');
        const result = await products.json();
        setItems(result);
        console.log(items);
    }

    return (
      <div>
        {items && items.map((element) => (
          <ItemTemplate data={element}/>
        ))}
    </div>
    )
}
