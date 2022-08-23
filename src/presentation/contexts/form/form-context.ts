import { createContext } from 'react'

export type StatusProps = {
    isLoading: boolean
    isButtonDisabled: boolean
    isSpinnerVisible: boolean
    errorMessage: string
}

export default createContext({} as StatusProps)