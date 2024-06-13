import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store'; // Importa RootState para la función selectora

// Define la interfaz para el estado de autenticación
export interface AuthState {
  user: { email: string } | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

// Estado inicial de la autenticación
const initialState: AuthState = {
  user: null,
  status: 'idle',
  error: null,
};

/**
 * Simulación de llamada a API para autenticación
 * createAsyncThunk genera una acción asincrónica que puede ser despachada
 * credentials: Un objeto que contiene el email y la contraseña del usuario
 * thunkAPI: Proporciona funciones auxiliares como rejectWithValue
 */
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials: { email: string; password: string }, thunkAPI) => {
    const response = await fetch('https://digitalmoney.digitalhouse.com/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    
    if (response.ok) {
      const user = await response.json();
      return user;
    } else {
      return thunkAPI.rejectWithValue('Login failed');
    }
  }
);

// Crear el slice de autenticación
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    /**
     * Acción sincrónica para cerrar sesión
     * Establece el usuario a null
     */
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      /**
       * Caso cuando la acción loginUser está pendiente
       * Establece el estado a 'loading'
       */
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      /**
       * Caso cuando la acción loginUser se cumple exitosamente
       * Establece el estado a 'succeeded' y guarda la información del usuario
       */
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<{ email: string }>) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      /**
       * Caso cuando la acción loginUser es rechazada
       * Establece el estado a 'failed' y guarda el mensaje de error
       */
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

// Exportar la acción logout generada por el slice
export const { logout } = authSlice.actions;

// Selector para obtener el estado de autenticación desde el estado global
export const selectAuth = (state: RootState) => state.auth;

// Exportar el reductor del slice
export default authSlice.reducer;


