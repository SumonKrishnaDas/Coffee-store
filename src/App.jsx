import { useState } from 'react';
import {useLoaderData}from 'react-router-dom';

import './App.css'
import CoffeeCard from './Components/CoffeeCard/CoffeeCard';

function App() {
  const coffees=  useLoaderData()
  console.log(coffees);


  return (
    <div className='m-20'>

<h3 className='text-center text-5xl mb-20 '> Hot Hot Gold Cofee: {coffees.length}  </h3>
<div  className='grid md:grid-cols-2 gap-4'>

{

coffees.map(coffee=> <CoffeeCard key={coffee._id} coffee ={coffee} > </CoffeeCard>)


}

</div>
     
    </div>
  )
}

export default App
