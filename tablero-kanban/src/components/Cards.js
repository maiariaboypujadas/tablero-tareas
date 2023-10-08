import React from 'react';
import styled from 'styled-components';
import Tarjeta from './Form';

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

const Cards = () => {
  const columnas = [
    { titulo: 'Tareas', tarjetas: [] },
    { titulo: 'En Progreso', tarjetas: [] },
    { titulo: 'Completadas', tarjetas: [] },
  ];

  

  return (
    <HomeContainer>
      {columnas.map((columna) => (
        <ColumnaContainer key={columna.titulo}>
          <Titulo>{columna.titulo}</Titulo>
          {columna.tarjetas.map((tarjeta) => (
            <TarjetaContainer key={tarjeta.id}>
              {/* Renderizar contenido de la tarjeta aquí */}
            </TarjetaContainer>
          ))}
          <Tarjeta/>
        </ColumnaContainer>
      ))}
    </HomeContainer>
  );
};

export default Cards;