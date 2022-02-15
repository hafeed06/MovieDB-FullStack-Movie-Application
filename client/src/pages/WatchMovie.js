import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { getNodeMovieById } from '../apis/NodeAPI';
import YoutubeEmbed from '../Components/Movies/MoviesViewComponents/YoutubeEmbed';

const WatchMovie = () => {
  /// movieid should be the exact same that is in route /:movieid
    let { movieid } = useParams();
    movieid = atob(movieid)

    const [movieLink, setMovieLink] = useState("")

    useEffect(() => {


        

        const getMovie = async () => {
          const result = await getNodeMovieById(movieid)
          console.log(result.link)
          console.log("get Movie has been run")
          setMovieLink(result.link)

        }
        getMovie()
    }, [])

    // Here get the movie link from movie ID 

  return (
    <div>
        <YoutubeEmbed movieLink = {movieLink} /> 
    </div>
  )
}

export default WatchMovie