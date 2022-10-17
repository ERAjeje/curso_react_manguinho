import React from "react"
import { Message } from "./styles"

type ErrorProps = {
    message?: string
}


export const Error = ({ message }: ErrorProps) => {
    return (
        <div data-testid='error-message'>
            <Message>{message || 'Error'}</Message>
        </div>
    )
}