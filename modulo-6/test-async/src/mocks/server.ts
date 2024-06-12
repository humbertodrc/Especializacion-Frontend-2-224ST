import { setupServer } from "msw/node"
import { hanlders } from "./handlers"

export const server = setupServer(...hanlders)