import {
  PlayCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid"
import React from "react"
import { Link } from "react-router-dom"

const getIcon = (text) => {
  switch (text) {
    case "play":
      return <PlayCircleIcon className="w-6 h-6" />
    case "info":
      return <InformationCircleIcon className="w-6 h-6" />
    default:
      return <InformationCircleIcon className="w-6 h-6" />
  }
}
const AppButton: React.FC<any> = ({ styles, text, link, action, icon }) => {
  return (
    <Link to={link}>
      <div
        className={`${styles} flex py-2 px-3 rounded-md gap-2 text-bold capitalize transition duration-200 ease-linear`}
      >
        {text}
        <span>{getIcon(icon)}</span>
      </div>
    </Link>
  )
}

export default AppButton
