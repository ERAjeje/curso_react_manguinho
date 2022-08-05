import React from "react"
import './styles.css'

const Spinner: React.FC = () => {
    return (
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    )
}

export default Spinner