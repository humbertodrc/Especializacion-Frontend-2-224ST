import {useMutation} from "@apollo/client";
import {useState} from "react";
import {CREATE_TASK} from "../querys";

interface CreateTaskProps {
	handleRefetch: () => void;
}

export default function CreateTask({handleRefetch}: CreateTaskProps) {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	const [createTask, {loading, error}] = useMutation(CREATE_TASK);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (!title || !description) return;

		try {
			createTask({variables: {title, description}});
			handleRefetch();
			setTitle("");
			setDescription("");
		} catch (error) {
			// Manejar el error
			console.log(error);
		}
	};

	return (
		<div>
			{loading && <p>Loading...</p>}
			{error && <p>Error</p>}
			<form onSubmit={handleSubmit}>
				<label>
					Title:
					<input
						type="text"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</label>
				<label>
					Description:
					<input
						type="text"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
				</label>
				<button type="submit">Create Task</button>
			</form>
		</div>
	);
}
