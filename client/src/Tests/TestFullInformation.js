import React from 'react'
import {getFullInformation} from '../apis/JavaAPI'
import { useEffect } from 'react'

const TestFullInformation = () => {

    useEffect(() => {
        console.log("Testing User Full Information");
        const fullInfo = async () => {
          
        }
        const userInformation = getFullInformation() 
    }, [])
    

  return (
    <div>TestFullInformation</div>
  )
}

export default TestFullInformation