import axios from "axios"

const url = "https://rnapi.ghorbany.dev/api"

axios.defaults.headers.post["Content-Type"] = "application/json"

export const fetchCourses = async () => {
    try {
        const { data: { courses } } =await axios.get(`${url}/courses`)
        return courses
    } catch (error) {
        console.log(error)
    }
}

