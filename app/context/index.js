import { createContext } from "react"


const Context = createContext({
    courses: [],
    loading: true
})

export default Context