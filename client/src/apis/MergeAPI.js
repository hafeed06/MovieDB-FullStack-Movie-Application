import { nodeAddMovie, getNodeMovies } from "./NodeAPI";
import { javaAddMovie, getJavaMovies } from "./JavaAPI";

export const addMovie = async (data) => {
    const movieId = await nodeAddMovie(data)
    console.log("Movie Added to Mongo")
    if(movieId) {
        await javaAddMovie(movieId, data)
        console.log("Movie added to PGSQL")
    }
}


export const getMovies = async () => {

        let nodeMovies = null
        let javaMovies = null
        let mergedMovies = null 
        await getNodeMovies()
            .then(res => nodeMovies = res)
            .catch(error => console.error(error))
        await getJavaMovies()
            .then(res => javaMovies = res)
            .catch(error => console.error(error))
        if(nodeMovies && javaMovies) {
            mergedMovies = nodeMovies
            for(let i = 0; i < mergedMovies.length; i++) {
                mergedMovies[i].addedDate = javaMovies[i].addedDate
            }
            return mergedMovies
        }
        
}