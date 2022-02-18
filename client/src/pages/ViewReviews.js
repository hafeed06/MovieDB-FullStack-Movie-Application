import { Divider, Grid, Paper, Typography } from '@mui/material'
import '../index.css'
import { TESTIMAGE } from '../Tests/TestImage'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import GradingIcon from '@mui/icons-material/Grading';
import {useState, useEffect} from 'react'
import { getNodeMovieById, getRating } from '../apis/NodeAPI';
import {useParams} from 'react-router-dom'

const ViewReviews = () => {
    const { movieid } = useParams();
    const [movieInformation, setMovieInformation] = useState(null)
    const [ratings, setRatings] = useState([])
    useEffect(() => {
        const apiFetch = async () => {
            try {
                const apiMovieResults = await getNodeMovieById(movieid)
                setMovieInformation(apiMovieResults)
                const apiRatingsResults = await getRating(movieid)
                setRatings([...apiRatingsResults])
            } catch (error) {
                console.log("Failure")
                console.log(error)
            }
        }
        apiFetch()
    },[])

    return (
        <div className='containerSpaced' style={{marginLeft:'20%', marginRight:'20%'}}>
            <div className='centered'>
                <div className='inlineTextIcon'>
                <GradingIcon color="primary" fontSize="large"/>
                <Typography variant="h4" color="primary" pt={2} pb={2}> Movie Reviews </Typography>
                </div>

            </div>
            <Grid container spacing={2}>

                {/* Movie Basic Information Here  */}

                <Grid item xs={12} SX>
                { movieInformation && (
                    <Card sx={{ maxWidth: '100%', background:'#1D2022' }} className='centered'>
                        <CardMedia
                            component="img"
                            height="400"
                            image={movieInformation.image}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" color="primary">
                                {movieInformation.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" color="white">
                                {movieInformation.movieDirector}
                            </Typography>
                        </CardContent>
                    </Card>)
                    }
                </Grid>

                {/* Reviews Here  */}
                
                <Grid item xs={12}>
                    <Paper sx={{padding:3}}>

                        {/* Here Ratings One by One  */}

                        {ratings && ratings.map(e => 
                            (
                            <div>
                            <Typography variant="body2">User: {e.userid} </Typography>
                            <Typography variant="body2">Rating: {e.rating} /10</Typography>
                            <Typography variant="body2">Review Title: {e.commentTitle} </Typography>
                            <Typography variant="body2">Review Comment: {e.commentContent} </Typography>
                            <Divider sx={{  marginTop:2, marginBottom: 2 }} />
                            </div>)
                            )}



                    </Paper>

                </Grid>



            </Grid>
        </div>
    )
}

export default ViewReviews