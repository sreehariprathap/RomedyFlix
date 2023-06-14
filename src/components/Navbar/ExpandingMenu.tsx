import { Bars2Icon } from "@heroicons/react/24/solid"
import React from "react"

const ExpandingMenu = () => {
  return (
    <div className="flex lg:hidden">
      <Bars2Icon className="w-6 h-6 text-white" />
    </div>
  )
}

export default ExpandingMenu
