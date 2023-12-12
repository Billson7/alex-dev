import React, { ReactElement, useState } from "react"
import "../App.css"
import { CopyToClipboard } from "react-copy-to-clipboard"

const CMD_TEXT: string = "npx alexbillson-dev"
const ALERT_TEXT: string = "Click to copy, then paste into a terminal"
const ALERT_COPIED_TEXT: string = "Copied!"

export const Npx = (): ReactElement => {
  const [alertText, setAlertText] = useState(ALERT_TEXT)
  const copiedAlert = (): void => setAlertText(ALERT_COPIED_TEXT)

  return (
    <>
      <CopyToClipboard text={CMD_TEXT}>
        <button id="npx-package" onClick={copiedAlert}>
          <code>{CMD_TEXT}</code>
        </button>
      </CopyToClipboard>
      <p id="info-disclaimer">{alertText}</p>
    </>
  )
}
