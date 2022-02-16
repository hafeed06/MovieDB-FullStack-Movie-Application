import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { getNodeMovieById } from '../apis/NodeAPI';
import YoutubeEmbed from '../Components/Movies/MoviesViewComponents/YoutubeEmbed';
import {useRecoilValue} from 'recoil'
import { userInformationState } from '../Atoms';
import { addSeenMovie } from '../apis/JavaAPI';

const WatchMovie = () => {
  /// movieid should be the exact same that is in route /:movieid
    let { movieid } = useParams();
    movieid = atob(movieid)
    const userInformation = useRecoilValue(userInformationState)
    const userid = userInformation.userid 
    console.log("User id => " + userid)
    const [movieLink, setMovieLink] = useState("")

    useEffect(() => {
        const getMovie = async () => {
          // Getting the movie Link from Node backend
          const result = await getNodeMovieById(movieid)
          console.log(result.link)
          setMovieLink(result.link)
          // Adding Seen movie to Java backend 
          const seenMovieData = {
            userid: userid, 
            seenDate: new Date().getTime(), 
            movieRef: result._id
          }
          console.log(seenMovieData)
          const lastSeenAdd = await addSeenMovie(seenMovieData)
          console.log(lastSeenAdd)
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