import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from './Actions'

const Movies = () => {
  const dispatch= useDispatch()
   const{data, loading, error}= useSelector(state=>state)

   useEffect(()=>{
     dispatch(fetchData());

   },[dispatch]);
   if (loading) {
    return <div>Loading data...</div>;
  }

  if (error) {
    return <div>Error fetching data: {error}</div>;

  }
  return (
    <>
    {data?.map(item=>(
      <div key={item.id}>
 <span>{item.title}</span>
          <span>{item.category}</span>
      </div>
    ))}
    </>
  )
}

export default Movies