import React from "react";
import { Link } from "react-router-dom";
import { useOdontoContext } from "../Context/Context";

const Card = ({data}) => {
  const { state, dispatch } = useOdontoContext();
    const findCart = state.fav.find((item) => item.id === data.id);
    
  const addFav = () => {
    if (!findCart) {
      dispatch({ type: 'ADD_FAV', payload: data });
      alert(`¡Dentista N° ${data.id} añadido a sus favoritos!`);
    } else {
      alert("Ya es favorito");
    }
};

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
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
