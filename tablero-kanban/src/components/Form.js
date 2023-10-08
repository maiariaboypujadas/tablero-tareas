import React, { useState } from 'react';
import styled from 'styled-components';

const TarjetaContainer = styled.div`
  background-color: #fff;
  padding: 10px;
  margin-bottom: 10px;
`;

const TareaForm = styled.form`
  display: flex;
  margin-top: 10px;
`;

const TareaInput = styled.input`
  flex-grow: 1;
  margin-right: 10px;
`;

const AgregarTareaButton = styled.button`
  background-color: #333;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
`;

const TareaItem = styled.li`
  display: flex;
  align-items: center;
`;

const TareaText = styled.span`
  flex-grow: 1;
`;

const EliminarTareaButton = styled.button`
  background-color: #ff0000;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
`;

const Tarjeta = ({ tarjeta }) => {
  const [nuevaTarea, setNuevaTarea] = useState('');
  const [tareas, setTareas] = useState([]);

  const handleChange = (event) => {
    setNuevaTarea(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (nuevaTarea.trim() !== '') {
      setTareas([...tareas, nuevaTarea]);
      setNuevaTarea('');
    }
  };

  const handleEliminarTarea = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas.splice(index, 1);
    setTareas(nuevasTareas);
  };

  return (
    <TarjetaContainer>
      {/* Renderizar contenido de la tarjeta aquí */}
      <ul>
        {tareas.map((tarea, index) => (
          <TareaItem key={index}>
            <TareaText>{tarea}</TareaText>
            <EliminarTareaButton onClick={() => handleEliminarTarea(index)}>
              X
            </EliminarTareaButton>
          </TareaItem>
        ))}
      </ul>
      <TareaForm onSubmit={handleSubmit}>
        <TareaInput type="text" value={nuevaTarea} onChange={handleChange} />
        <AgregarTareaButton type="submit">Agregar</AgregarTareaButton>
      </TareaForm>
    </TarjetaContainer>
  );
};

export default Tarjeta;