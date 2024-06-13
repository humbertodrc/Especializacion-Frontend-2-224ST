import authReducer, {AuthState} from "../../store/authSlice";

describe("Pruebas en authSlice", () => {
	test("Debe retornar el estado inicial", () => {
		const initialState = undefined;
		const action = {type: "unknown"};

		const newState = authReducer(initialState, action);

		expect(newState).toEqual({
			user: null,
			status: "idle",
			error: null,
		});

		// expect(authReducer(undefined, { type: "unknown" })).toEqual({
		//   user: null,
		//   status: "idle",
		//   error: null,
		// });
	});

	test("Debe manejar el estado de autenticación procesando", () => {
		const initialState = {
			user: null,
			status: "idle",
			error: null,
		} as AuthState;

		const action = {type: "auth/loginUser/pending"};

		const newState = authReducer(initialState, action);

		expect(newState).toEqual({
			user: null,
			status: "loading",
			error: null,
		});

		// expect(
		//   authReducer(
		//     {
		//       user: null,
		//       status: "idle",
		//       error: null,
		//     },
		//     { type: "auth/loginUser/pending" }
		//   )
		// ).toEqual({
		//   user: null,
		//   status: "loading",
		//   error: null,
		// });
	});

	test("Debe manejar el estado de autenticación exitoso", () => {
		const initialState = {
			user: null,
			status: "idle",
			error: null,
		} as AuthState;

		const action = {
			type: "auth/loginUser/fulfilled",
			payload: {
				email: "humberto.rivero@digitalhouse.com",
				password: "Digital1234",
			},
		};

		const newState = authReducer(initialState, action);

		expect(newState).toEqual({
			user: {
				email: "humberto.rivero@digitalhouse.com",
				password: "Digital1234",
			},
			status: "succeeded",
			error: null,
		});

		// expect(
		//   authReducer(
		//     {
		//       user: null,
		//       status: "idle",
		//       error: null,
		//     },
		//     { type: "auth/loginUser/fulfilled", payload: { email: "humberto.rivero@digitalhouse.com", password: "Digital1234" } }
		//   )
		// ).toEqual({
		//   user: { email: "humberto.rivero@digitalhouse.com", password: "Digital1234" },
		//   status: "succeeded",
		//   error: null,
		// });
	});

  test("Debe manejar el estado de autenticación fallido", () => {
    
    const initialState = {
      user: null,
      status: "idle",
      error: null,
    } as AuthState;

    const action = {
      type: "auth/loginUser/rejected",
      payload: "Login failed",
    };

    const newState = authReducer(initialState, action);

    expect(newState).toEqual({
      user: null,
      status: "failed",
      error: "Login failed",
    });

		// expect(
		// 	authReducer(
		// 		{
		// 			user: null,
		// 			status: "idle",
		// 			error: null,
		// 		},
		// 		{type: "auth/loginUser/rejected", payload: "Login failed"}
		// 	)
		// ).toEqual({
		// 	user: null,
		// 	status: "failed",
		// 	error: "Login failed",
    // });
    
	});
});
