import React from "react";
import { Link } from "react-router-dom";
import { useOdontoContext } from "../Context/Context";

const Card = ({data}) => {
  const { state, dispatch } = useOdontoContext();
    const findCart = state.fav.find((item) => item.id === data.id);
    
  const addFav = () => {
    if (!findCart) {
      dispatch({ type: 'ADD_FAV', payload: data });
      alert(`¡Dentista N° ${data.id} añadida a sus favoritos!`);
    } else {
      alert("Ya está en favoritos");
    }
};

  return (
    <div className="card">
      <Link to={"/dentist/" + data.id}>
        <img width="300" src="/images/doctor.jpg" alt="Imagen Doctor"/>
        <h3>{data.name}</h3>
      </Link>
      <p>{data.username}</p>
      <button onClick={addFav} className="favButton"><img src="/images/icon-estrella.gif" alt="Favorito"/></button>
    </div>
  );
};

export default Card;
