import React from 'react'
import '../../../index.css'

const YoutubeEmbed = ({movieLink}) => {

    const width = window.screen.width
    const height = window.screen.height - 183

    console.log(movieLink)

  return (
    <div>
    <iframe
      width={width}
      height={height}
      src={`https://www.youtube.com/embed/${movieLink}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
  )
}

export default YoutubeEmbed