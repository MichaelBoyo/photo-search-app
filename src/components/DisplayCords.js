import { useState } from "react"
import MouseMove from "./MouseMove"
const DisplayCords = () => {
    const [display, setDisplay] = useState(true)
  return (
    <div>
        <button onClick={() => setDisplay(!display)}>add input</button>
        {display && <MouseMove/>}
    </div>
  )
}

export default DisplayCords