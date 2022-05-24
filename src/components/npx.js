import React, { useState } from "react"
import "../App.css"
import { CopyToClipboard } from "react-copy-to-clipboard"

export const Npx = () => {
  const commandText = "npx alexbillson-dev"
  const copiedAlert = () => setAlertText("Copied!")
  const [alertText, setAlertText] = useState(
    "Click to copy, then paste into a terminal"
  )
  return (
    <>
      <CopyToClipboard text={commandText}>
        <button id="npx-package" onClick={copiedAlert}>
          <code>{commandText}</code>
        </button>
      </CopyToClipboard>
      <p id="info-disclaimer">{alertText}</p>
    </>
  )
}
