import React, { useContext } from "react"
import Spinner from "../spinner/spinner";
import Context from '@/presentation/contexts/form/form-context'

type ButtonProps = {
  children: React.ReactNode
  onClick: () => void
  type?: 'button' | 'submit' | 'reset'
}

export const Button = (props: ButtonProps) => {
  const { isSpinnerVisible, isButtonDisabled } = useContext(Context)
  return (
    isSpinnerVisible 
      ? <Spinner data-testid='spinner' /> 
      : <button 
          type={props.type} 
          onClick={() => props.onClick()} 
          disabled={isButtonDisabled}
          data-testid='form-button'
        >
          {props.children}
        </button>
  )
}