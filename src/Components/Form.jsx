import { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [usuario, setUsuario] = useState({
    nombre: "",
    email: ""
  });

  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleNombre = (event) => setUsuario({ ...usuario, nombre: event.target.value });
  const handleEmail = (event) => setUsuario({ ...usuario, email: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (usuario.nombre.length > 5 && regex.test(usuario.email) ){
      setShow(true);          
      setError(false);
    } else {
      setError(true);
      }
  };

  console.log(usuario.nombre);
  console.log(usuario.email);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder= "Nombre Completo" value={usuario.nombre} onChange={handleNombre} />
        <input type="text" placeholder= "Email" value={usuario.email} onChange={handleEmail} />
        <button>ENVIAR</button>
      </form>

      {error && (<p>Por favor verifique su información nuevamente.</p>)}
      {show && <h2>Gracias {usuario.nombre}, te contactaremos cuanto antes vía e-mail.</h2> }
      
    </div>
  );
};

export default Form;
