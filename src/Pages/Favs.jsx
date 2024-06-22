import React from "react";
import Card from "../Components/Card";
import { useOdontoContext } from "../Context/Context";

const Favs = () => {
  const { state } = useOdontoContext();
  
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {state.fav.length ? state.fav.map((item) => <Card data={item} key={item.id} />)
         : <h3>No se ingresaron favoritos aún.</h3>}
      </div>
      
    </>
  );
};

export default Favs;
