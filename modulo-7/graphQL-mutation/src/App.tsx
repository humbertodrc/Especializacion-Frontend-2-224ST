import { useQuery } from "@apollo/client"
import './App.css'
import { GET_ALL_TASKS } from "./querys"
import { Tasks } from "./types/task.types"
import CreateTask from "./components/CreateTask"

function App() {

  const { data, loading, error, refetch } = useQuery<Tasks>(GET_ALL_TASKS)
  
  const handleRefetch = () => {
    refetch()
  }

  return (
    <>
      <div>
        <h1>GraphQl Mutation</h1>
        {loading && <p>Loading...</p>}
        {error && <p>Error</p>}
        {data && data.allTasks.map((task) => (
          <div key={task.id}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
          </div>
        ))}
      </div>
      <CreateTask handleRefetch={handleRefetch} />
    </>
  )
}

export default App
