import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import { useOdontoContext } from '../Context/Context';
import axios from 'axios';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state } = useOdontoContext();
 
  return (
    <main>
      <h1>Home</h1>
      <div className='card-grid'>
        {state.dentists.length > 0 ? state.dentists.map((item) => <Card data={item} key={item.id} />) : <p>Loading...</p>}
      </div>
    </main>
  )
}

export default Home;
