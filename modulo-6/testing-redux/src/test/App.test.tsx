import {render, screen, fireEvent, waitFor} from "@testing-library/react";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import authReducer from "../store/authSlice";
import App from "../App";

const store = configureStore({
	reducer: {
		auth: authReducer,
	},
});


describe("App", () => {
	
	test("renders login form", () => {
		render(
			<Provider store={store}>
				<App />
			</Provider>
		);

		expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
		expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();
	});

	test("successful login", async () => {
		render(
			<Provider store={store}>
				<App />
			</Provider>
		);

		fireEvent.change(screen.getByPlaceholderText(/Email/i), {
			target: {value: "humberto.rivero@digitalhouse.com"},
		});
		fireEvent.change(screen.getByPlaceholderText(/Password/i), {
			target: {value: "Digital1234"},
		});

		fireEvent.click(screen.getByRole("button"));

		await waitFor(() => {
			console.log("Revisando si aparece 'Processing' en el DOM");
			expect(screen.getByText(/Processing/i)).toBeInTheDocument();
    });
    

		await waitFor(() => {
			console.log("Revisando si aparece 'Welcome' en el DOM");
			expect(screen.getByText(/Welcome/i)).toBeInTheDocument();
    });
    
    // screen.debug();
	});

	test("failed login", async () => {
		render(
			<Provider store={store}>
				<App />
			</Provider>
		);

		fireEvent.change(screen.getByPlaceholderText(/Email/i), {
			target: {value: ""},
		});
		fireEvent.change(screen.getByPlaceholderText(/Password/i), {
			target: {value: ""},
		});

		fireEvent.click(screen.getByRole("button"));

		await waitFor(() => {
			console.log("Revisando si aparece 'Processing' en el DOM");
			expect(screen.getByText(/Processing/i)).toBeInTheDocument();
		});

		// Mensaje de Login failed
		await waitFor(() => {
			console.log("Revisando si aparece 'Login failed' en el DOM");
			expect(screen.getByText(/Login failed/i)).toBeInTheDocument();
		});
	});
});
