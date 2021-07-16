import React, {useState, useEffect} from 'react';

export default function List() {

    const [list, setList] = useState([]);
    const [count, setCount] = useState(2);
  
    useEffect(() => {
      console.log(list);
      add();
    }, []);
  
    const add = () => {
      fetch('data.json')
      .then((response) => response.json())
      .then((data) => {
        setList(data);
        // console.log(list);
      })
      .catch((e) => {
      });
    }
  
    return (
      <div>
        <p>Data:</p>
        <ul>
          {list.map((element) => (
            <li key={element.id}>{element.name}</li>
          ))}
        </ul>
      </div>
    );
  };

/* export default function ItemList() {

    const [items, setItems] = useState([]);

    useEffect( () => {
        call();
    }, []);

    const call =  async () =>{
        const products = await fetch('data/datos.json');
        products.then(result =>{ 
            if(!result.ok)
            throw new Error(result.text);
            return result.json();
        })
        .then(result =>{
            setList(result);
            console.log(list);
        })
        .catch(error =>{
            console.log(error);
        })
        const result = await products.json();
        setItems(result);
        console.log(items);
    }

    return (
        <div>
            
        </div>
    )
}
 */