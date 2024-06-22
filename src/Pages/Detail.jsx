import React, { useEffect, useState } from 'react';
import { useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [dentist, setDentist] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  
  const url = (`https://jsonplaceholder.typicode.com/users/${id}`);
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  useEffect(() => {
    axios(url)
    .then(res => setDentist(res.data))
    .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>Detail Dentist {id} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{dentist.name}</td>
            <td>{dentist.email}</td>
            <td>{dentist.phone}</td>
            <td>{dentist.website}</td>
          </tr>
        </tbody>
      </table>

      <button onClick={() => navigate(-1)}>Volver</button>
    </>
    
  )
}
export default Detail;