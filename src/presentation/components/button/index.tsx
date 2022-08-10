import React from "react"
import Spinner from "../spinner/spinner";

type ButtonProps = {
  children: React.ReactNode
  onClick: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  showSpinner?: boolean
}

export const Button = (props: ButtonProps) => {
  return (
    props.showSpinner ? <Spinner /> : <button type={props.type} onClick={() => props.onClick()} disabled={props.disabled}>{props.children}</button>
  )
}