import {
  ChevronDoubleDownIcon,
  EllipsisVerticalIcon,
  PlayIcon,
} from "@heroicons/react/24/solid"

const RoundActionButton: React.FC<any> = ({ icon, styles, action, hoverText }) => {
  const getIcon = (text) => {
    switch (text) {
      case "play":
        return <PlayIcon className="w-6 h-6" />
      case "info":
        return <EllipsisVerticalIcon className="w-6 h-6" />
      default:
        return <ChevronDoubleDownIcon className="w-6 h-6" />
    }
  }
  return (
    <div
      className={`rounded-full border-white border-2 p-1 w-8 h-8 flex justify-center items-center tooltip tooltip-white ${styles}`}
      data-tip={hoverText}
    >
      {getIcon(icon)}
    </div>
  )
}

export default RoundActionButton
