import {AGREGAR_TARJETA, MOVER_TARJETA, ELIMINAR_TARJETA} from './actions'

const initialState = {
 tarjetas: []
}
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case AGREGAR_TARJETA:
          return {
            ...state,
            tarjetas: [...state.tarjetas, action.payload.tarjeta]
          };
        case MOVER_TARJETA:
            const tarjetaId  = action.payload;
      const tarjetaMovida = state.tarjetas.find(tarjeta => tarjeta.id === tarjetaId);

      if (!tarjetaMovida) {
        return state; // Si la tarjeta no existe, retorna el estado actual sin cambios
      }
            return {
        ...state,
        tarjetas: tarjetaMovida
            }
        case ELIMINAR_TARJETA:
            const tarjetaId2 = action.payload;
            const nuevasTarjetas = state.tarjetas.filter(tarjeta => tarjeta.id !== tarjetaId2);
            return {
                ...state,
                tarjetas: nuevasTarjetas
            }
            default:
            return state;
        }
}
export default rootReducer;
