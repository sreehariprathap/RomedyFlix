import React from "react"
import ReactPlayer from "react-player"

const Player = () => {
  return (
    <ReactPlayer
      url="https://www.youtube.com/watch?v=8xg3vE8Ie_E&pp=ygURdGF5bG9yIHN3aWZ0IHNvbmc%3D"
      controls={true}
      width={"100%"}
    />
  )
}

export default Player
