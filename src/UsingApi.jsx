import React, {useEffect, useState } from 'react'




const UsingApi = () =>{
        const [data, setData] = useState([]); 

        useEffect(() =>{
                const fetchData = async () => {
                    const responce = await fetch('https://jsonplaceholder.typicode.com/posts'); //wait for fetch
                    const jsonData = await responce.json(); //converts this to json format
                    setData(jsonData);
            }
            fetchData();
        },[])//,[] to avoid rendering forever<eng/Mohammed> ------- 

            // finally to use the data comes from api using data.map((item) << لازم تعمل لية mapping 

    return (
      <div>
        {data.map((item) => ( //كل بلوك في الجيسون اسميتة item 
            <div key={item.id}> 
             <h2>{item.title}</h2>
              <h3>{item.body}</h3>
              </div>
        ))}
      </div>
      );
}
export default UsingApi;