// src/store/authSlice.test.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer, { loginUser } from "../../store/authSlice";
import { RootState } from "../../store/store";
import { server } from "../../mocks/server";

const mockStore = (initialState: Partial<RootState>) =>
  configureStore({
    reducer: {
      auth: authReducer as any,
    },
    preloadedState: initialState,
  });

describe('authSlice - loginUser', () => {
  beforeEach(() => {
    // Restablecer cualquier request handlers que podamos agregar durante los tests
    server.resetHandlers();
  });

  it('should handle a successful login', async () => {
    const store = mockStore({ auth: { user: null, status: 'idle', error: null } });
    
    await store.dispatch(loginUser({ email: 'humberto.rivero@digitalhouse.com', password: 'Digital1234' }));

    const state = store.getState().auth;
    // Verifica que el estado después de una acción exitosa es el esperado
    expect(state).toEqual({
      user: {
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IjE5IiwiZW1haWwiOiJodW1iZXJ0by5yaXZlcm9AZGlnaXRhbGhvdXNlLmNvbSIsImV4cCI6MTcxODI0MjI4N30.oyJDLSA8hIqTI1hvFlhHm1TjUYF0KqfJtUe3imuqPlk",
      },
      status: 'succeeded',
      error: null,
    });
  });

  it('should handle a failed login', async () => {
    const store = mockStore({ auth: { user: null, status: 'idle', error: null } });

    await store.dispatch(loginUser({ email: 'wrong@example.com', password: 'wrongpassword' }));

    const state = store.getState().auth;
    // { user: null, status: 'failed', error: 'Login failed' }
    expect(state).toEqual({
      user: null,
      status: 'failed',
      error: 'Login failed',
    });
   
  });
});
