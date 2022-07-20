import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function App() {
  const [data,setData] = useState([]);
  const [loading,setLoading] = useState(false);
  const [limit,setLimit] = useState(8);
  const [isProduct,setIsProduct] = useState(true);

  useEffect(()=>{
    setLoading(true);
    fetch(`https://dummyjson.com/products/?limit=${limit}`).then((response)=> response.json() ).then(res=>{
      setData(res.products);
      setLoading(false);
      if(limit > res.total){
        setIsProduct(false);
      }
    });
  },[limit]);



  const LoadData = () =>{
    setLimit(limit + 50)
  } 


  return (
    <div className="App">
      <div className="container">
        <h2>Product Data</h2> 
        <div className="wrapper">
          {
            loading ? <Display_dummy /> : data.map((item)=><ProductItem porductData={item} key={item.id} />)
          }
        </div>
       {
        isProduct ? <button  className="button" onClick={()=> LoadData()}>Load More</button> : ""
       }
       

      </div>
    </div>
  );
}

export default App;



const Display_dummy =()=>{
  return(
    <>
    <div>
    <Skeleton height={200}/> <br />
    <Skeleton /><br />
    <Skeleton height={50}/> <br />
    <Skeleton height={30}/> 
    </div> 

    <div>
    <Skeleton height={200}/> <br />
    <Skeleton /><br />
    <Skeleton height={50}/> <br />
    <Skeleton height={30}/> <br />
    </div> 

    <div>
    <Skeleton height={200}/> <br />
    <Skeleton /><br />
    <Skeleton height={50}/> <br />
    <Skeleton height={30}/> 
    </div> 


    <div>
    <Skeleton height={200}/> <br />
    <Skeleton /><br />
    <Skeleton height={50}/> <br />
    <Skeleton height={30}/> 
    </div> 

    <div>
    <Skeleton height={200}/> <br />
    <Skeleton /><br />
    <Skeleton height={50}/> <br />
    <Skeleton height={30}/> 
    </div> 

    <div>
    <Skeleton height={200}/> <br />
    <Skeleton /><br />
    <Skeleton height={50}/> <br />
    <Skeleton height={30}/> 
    </div> 

    <div>
    <Skeleton height={200}/> <br />
    <Skeleton /><br />
    <Skeleton height={50}/> <br />
    <Skeleton height={30}/> 
    </div> 

    <div>
    <Skeleton height={200}/> <br />
    <Skeleton /><br />
    <Skeleton height={50}/> <br />
    <Skeleton height={30}/> 
    </div> 
    </>
  )
}
