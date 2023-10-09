import React, { useState } from 'react';
import styled from 'styled-components';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ColumnaContainer = styled.div`
  background-color: #f2f2f2;
  padding: 10px;
  margin: 10px;
`;

const Titulo = styled.h2`
  color: #333;
`;

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

const Cards = () => {
  const [nuevaTarea, setNuevaTarea] = useState('');
  const [columnas, setColumnas] = useState({
    Tareas: [],
    'En Progreso': [],
    Completadas: []
  });
 
  const handleChange = (event) => {
    setNuevaTarea(event.target.value);
  };

  const handleSubmit = (event, columna) => {
    event.preventDefault();

    if (nuevaTarea.trim() !== '') {
      const nuevasTareas = [...columnas[columna], nuevaTarea];
      const nuevasColumnas = {
        ...columnas,
        [columna]: nuevasTareas,
      };
      setColumnas(nuevasColumnas);
      setNuevaTarea('');
    }
  };

  const handleEliminarTarea = (index, columna) => {
    const nuevasTareas = [...columnas[columna]];
    nuevasTareas.splice(index, 1);
    const nuevasColumnas = {
      ...columnas,
      [columna]: nuevasTareas,
    };
    setColumnas(nuevasColumnas);
  };
  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const sourceColumn = columnas[source.droppableId];
    const destinationColumn = columnas[destination.droppableId];
    const newColumnas = { ...columnas };
    if (source.droppableId === destination.droppableId) {
   
      const newTasks = Array.from(sourceColumn);
  

      newTasks.splice(source.index, 1);

      newTasks.splice(destination.index, 0, draggableId);
  
     
      newColumnas[source.droppableId] = newTasks;
    } else {
  
      const sourceTasks = Array.from(sourceColumn);
  
     
      const destinationTasks = Array.from(destinationColumn);
  
  
      sourceTasks.splice(source.index, 1);
  

      destinationTasks.splice(destination.index, 0, draggableId);
  
      newColumnas[source.droppableId] = sourceTasks;
      newColumnas[destination.droppableId] = destinationTasks;
    }
    setColumnas(newColumnas);
  };
  return (
    <HomeContainer>
<DragDropContext onDragEnd={handleDragEnd}>

    {Object.keys(columnas).map((columna) => (
        <Droppable key={columna} droppableId={columna}>
          {(provided) => (
            <ColumnaContainer ref={provided.innerRef} {...provided.droppableProps}>
              <Titulo>{columna}</Titulo>
              <TarjetaContainer>
                <ul>
                  {columnas[columna].map((tarea, index) => (
                      <Draggable key={tarea} draggableId={tarea} index={index}>
                      {(provided) => (
                          <TareaItem
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          >
                          <TareaText>{tarea}</TareaText>
                          <EliminarTareaButton
                            onClick={() => handleEliminarTarea(index, columna)}
                            >
                            X
                          </EliminarTareaButton>
                        </TareaItem>
                      )}
                    </Draggable>
                  ))}
                </ul>
                <TareaForm onSubmit={(event) => handleSubmit(event, columna)}>
                  <TareaInput
                    type="text"
                    value={nuevaTarea[columnas]}
                    onChange={handleChange}
                    />
                  <AgregarTareaButton type="submit">Agregar</AgregarTareaButton>
                </TareaForm>
              </TarjetaContainer>
              {provided.placeholder}
            </ColumnaContainer>
          )}
        </Droppable>
      ))}
      </DragDropContext>
    </HomeContainer>

  );
};

export default Cards;