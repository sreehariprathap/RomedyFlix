import React, { useRef } from "react"
import { getImageSrcWithAPIKey } from "../../features/landing/api/getImage"
import RoundActionButton from "../Buttons/RoundActionButton"

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

  const showModal = () => {
    const modal = modalRef.current
    if (modal) {
      modal.showModal()
    }
  }

  const closeModal = () => {
    const modal = modalRef.current
    if (modal) {
      modal.close()
    }
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
        className="w-[45rem] overflow-hidden rounded-2xl shadow-xl bg-dark relative"
      >
        <div>
          <img
            src={getImageSrcWithAPIKey(programData.backdrop_path)}
            alt=""
            className="w-full h-[25rem]"
          />
          <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <RoundActionButton
              icon={"play"}
              styles={
                "bg-slate-100 hover:bg-slate-200 text-dark w-[3rem] h-[3rem]"
              }
            />
          </div>
        </div>
        <p className="py-4">
          Press ESC key or click the button below to close
        </p>
        <div className="modal-action">
          <button className="btn" onClick={closeModal}>
            Close
          </button>
        </div>
      </form>
    </dialog>
  </>
  )
}

export default ProgramDetailsModal
