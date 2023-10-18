import React, { useState } from "react";

function Home() {
  const [proyectos, setProyectos] = useState([]);
  const [nuevoProyecto, setNuevoProyecto] = useState("");

  const handleChange = (event) => {
    setNuevoProyecto(event.target.value);
  };
  const handleSubmit = (event) => {
      event.preventDefault();
      if (nuevoProyecto.trim() !== "") {
        setProyectos([...proyectos, nuevoProyecto]);
      }
      setNuevoProyecto(""); 
    };
 const handleClick = () => {
    proyectos.push(nuevoProyecto)
 }
 const handleDelete = () => {
    const nuevosProyectos = proyectos.map((proy) => proy === proyectos);
    setProyectos(nuevosProyectos);
 }
    console.log(proyectos)

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Agregar tareas..."
        value={nuevoProyecto}
        onChange={handleChange}
      />
      <button type="submit" onClick={handleClick}>Agregar</button>
      <div>
      {proyectos.map((proy, index) => (
          <p key={proy}>{proy}
          <button onClick={() => handleDelete(proyectos[index])}>
              Eliminar
            </button>
          </p>
          ))}
      </div>
    </form>
  );
}

export default Home;