import React, { useRef, useState } from "react"
import { getImageSrcWithAPIKey } from "../../features/landing/api/getImage"
import RoundActionButton from "../Buttons/RoundActionButton"
import { XMarkIcon } from "@heroicons/react/24/solid"
import { Languages, MovieGenre } from "../../config/Constants"
import Player from "../Player/Player"

interface ModalProps {
  id: string
  children: any
  programData: any
}

const ProgramDetailsModal: React.FC<ModalProps> = ({
  id,
  children,
  programData,
}) => {
  const modalRef = useRef<HTMLDialogElement>(null)

  const [isPlayer, setIsPlayer] = useState(false)

  const showModal = () => {
    const modal = modalRef.current
    if (modal) {
      modal.showModal()
    }
  }

  const closeModal = () => {
    const modal = modalRef.current
    if (modal) {
      setIsPlayer(false)
      modal.close()
    }
  }

  const togglePlayer = () => {
    setIsPlayer(true)
  }

  const PosterView = () => {
    return (
      <>
        <img
          src={getImageSrcWithAPIKey(programData.backdrop_path)}
          alt=""
          className="w-full"
        />
        <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <RoundActionButton
            icon={"play"}
            styles={
              "bg-slate-100 hover:bg-slate-200 text-dark w-[3rem] h-[3rem]"
            }
            action={togglePlayer}
          />
        </div>
      </>
    )
  }

  const PlayerView = () => {
    return <Player />
  }

  console.log(programData)

  return (
    <>
      <div onClick={showModal}>{children}</div>
      <dialog
        id={id}
        className="modal modal-bottom sm:modal-middle"
        ref={modalRef}
      >
        <form
          method="dialog"
          className="w-[55rem] overflow-hidden rounded-2xl shadow-xl bg-dark-third relative "
        >
          <div className="h-[25rem] overflow-hidden">
            <div className="absolute w-full bg-transparent hover:bg-gradient-to-b from-black to-transparent ease-in-out transition duration-300 h-10">
              <button
                className="absolute right-0 px-2 py-1 border-transparent"
                onClick={closeModal}
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>
            {isPlayer ? <PlayerView /> : <PosterView />}
          </div>
          <div className="py-4 px-2">
            <div className="flex justify-between items-center">
              <h2 className="text-4xl font-bold">
                {programData.original_title}
              </h2>
              <div className="flex gap-3">
                <div className="bg-primary text-white rounded-md p-1 text-sm font-medium">
                  {programData.vote_average}
                </div>
                <div className="border bg-transparent flex justify-center items-center rounded-md px-1">
                  <p className="text-[0.5rem]"> U/A 13+</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex gap-1 pt-1 items-center">
                <div className="text-white p-1 text-sm font-medium">
                  {
                    Languages[
                      programData.original_language as keyof typeof Languages
                    ]
                  }
                </div>
                <div>|</div>
                {programData.genre_ids.map((id: number) => (
                  <div className="text-white p-1 text-sm font-medium">
                    {MovieGenre[id]},
                  </div>
                ))}
              </div>
            </div>
            <div className="py-2">
              <p className="text-sm font-thin">{programData.overview}</p>
            </div>
          </div>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  )
}

export default ProgramDetailsModal
