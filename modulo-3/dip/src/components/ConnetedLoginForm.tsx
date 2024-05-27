import postApi from "../apis/postApi"
import { LoginForm } from "./LoginForm"

const ConnetedLoginForm = () => {

  const handleSubmit = async (title: string, bodyPost: string) => {
		await postApi.post("/posts", { title, body: bodyPost })
  }

  return (
    <LoginForm onSubmit={handleSubmit} />
  )
}
export default ConnetedLoginForm