export const AGREGAR_TARJETA = "AGREGAR_TARJETA";
export const ELIMINAR_TARJETA = "ELIMINAR_TARJETA";
export const MOVER_TARJETA = "MOVER_TARJETA";

export const agregarTarjeta = (columnaId, tarjeta) => {
    return {
      type: AGREGAR_TARJETA,
      payload: {
        columnaId,
        tarjeta
      }
    };
  };
  
  export const moverTarjeta = (tarjetaId, origen, destino) => {
    return {
      type: MOVER_TARJETA,
      payload: {
        tarjetaId,
        origen,
        destino
      }
    };
  };
  
  export const eliminarTarjeta = (tarjetaId) => {
    return {
      type: ELIMINAR_TARJETA,
      payload: {
        tarjetaId
      }
    };
  };
