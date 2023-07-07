import { useModal } from "react-modal-hook";
import { useCallback } from "react";

interface IOptions {
  ifClickClose?: boolean;
}

export default ({
  ifClickClose
}: IOptions) => {
  let handleClose: (() => void) | undefined
  const handleClick = useCallback(() => {
    if (ifClickClose) {
      hideOverlay()
      if (handleClose) {
        handleClose()
      }
    }
  }, [])

  const handleShowOverlay = useCallback((fn1?: () => void, fn2?: () => void) => {
    showOverlay()
    if (fn1) fn1()
    handleClose = fn2
  }, [])

  const [showOverlay, hideOverlay] = useModal(() => (
    <div className="root" onClick={handleClick}>
      <style jsx>
        {`
            .root {
              position: fixed;
              left: 0;
              top: 0;
              right: 0;
              bottom: 0;
              background-color: rgba(12,20,51,.6);
            }
          `}
      </style>
    </div>
  ))

  return [
    handleShowOverlay, hideOverlay
  ]
}