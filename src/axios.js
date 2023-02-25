import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

// instance.get("/movie/550?api_key=a567ddbcc3050ec9599617c85468b828")
// means:  https://api.themoviedb.org/3/movie/550?api_key=a567ddbcc3050ec9599617c85468b828

export default instance;