import React, { useEffect, useState } from 'react';
import { useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';

const Detail = () => {
  const [dentist, setDentist] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  
  const url = (`https://jsonplaceholder.typicode.com/users/${id}`);
  
  useEffect(() => {
    axios(url)
    .then(res => setDentist(res.data))
    .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>Detail Dentist {id} </h1>
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