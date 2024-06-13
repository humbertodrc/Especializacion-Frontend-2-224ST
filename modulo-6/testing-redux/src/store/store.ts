import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';

/**
 * Configura el store de Redux
 * El store es el contenedor del estado global de la aplicación
 * authReducer se añade al store para manejar el estado de autenticación
 */
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

/**
 * Define el tipo AppDispatch basado en el store configurado
 * AppDispatch es útil para tipar correctamente las funciones de dispatch en la aplicación
 */
export type AppDispatch = typeof store.dispatch;

/**
 * Define el tipo RootState basado en el estado retornado por el store configurado
 * RootState es útil para tipar correctamente el estado global en selectores
 */
export type RootState = ReturnType<typeof store.getState>;

// Exporta el store configurado para ser usado en la aplicación
export default store;

