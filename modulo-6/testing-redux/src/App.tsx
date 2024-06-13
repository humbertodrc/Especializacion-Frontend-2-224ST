import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginUser} from "./store/authSlice";
import {AppDispatch, RootState} from "./store/store"; // Importa los tipos AppDispatch y RootState

function App() {
	// Definición de estados locales para email y password
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	// Especifica el tipo de dispatch utilizando AppDispatch
	const dispatch = useDispatch<AppDispatch>();

	// Utiliza un selector para obtener el estado de autenticación desde el estado global
	const auth = useSelector((state: RootState) => state.auth);

	// Manejador del submit del formulario de login
	const handleSubmit = (e: React.FormEvent) => {
		// Previene el comportamiento por defecto del formulario
		e.preventDefault();

		// Despacha la acción loginUser con las credenciales del usuario
		dispatch(loginUser({email, password}));
	};

	return (
		<div className='min-h-screen flex items-center justify-center bg-gray-100'>
			<div className='bg-white p-8 rounded-lg shadow-md w-96'>
				<h2 className='text-2xl font-semibold text-center mb-6'>Login</h2>
				{auth.status === "loading" && <p>Processing...</p>}
				{auth.status === "failed" && (
					<p className='text-red-500 text-center mt-4'>Login failed</p>
				)}
				{auth.status === "succeeded" && <p>Welcome</p>}
				<form onSubmit={handleSubmit}>
					<div className='mb-4'>
						<label
							className='block text-gray-700 text-sm font-bold mb-2'
							htmlFor='email'
						>
							Email
						</label>
						<input
							id='email'
							type='email'
							placeholder='Email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						/>
					</div>
					<div className='mb-6'>
						<label
							className='block text-gray-700 text-sm font-bold mb-2'
							htmlFor='password'
						>
							Password
						</label>
						<input
							id='password'
							type='password'
							placeholder='Password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
						/>
					</div>
					<div className='flex items-center justify-between'>
						<button
							type='submit'
							className={`bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center ${
								auth.status === "loading" && "cursor-not-allowed opacity-50"
							}`}
							disabled={auth.status === "loading"}
						>
							{auth.status === "loading" ? (
								<svg
									className='animate-spin h-5 w-5 mr-3 text-white'
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
								>
									<circle
										className='opacity-25'
										cx='12'
										cy='12'
										r='10'
										stroke='currentColor'
										strokeWidth='4'
									></circle>
									<path
										className='opacity-75'
										fill='currentColor'
										d='M4 12a8 8 0 018-8v8z'
									></path>
								</svg>
							) : (
								"Login"
							)}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default App;

