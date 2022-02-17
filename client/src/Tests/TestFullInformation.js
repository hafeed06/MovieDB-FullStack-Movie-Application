import React from 'react'
import {getFullInformation, getLastSeenMoviesCurrentUser} from '../apis/JavaAPI'
import { useEffect } from 'react'
import { getCurrentUserId } from '../apis/JavaAPI'

const TestFullInformation = () => {

    useEffect(() => {

        const testAPI = async () => {
          const x = await getLastSeenMoviesCurrentUser()
          console.log(x)
        }
        testAPI()
    }, [])
    

  return (
    <div>TestFullInformation</div>
  )
}

export default TestFullInformation