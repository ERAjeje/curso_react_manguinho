import React from "react"
import { render } from '@testing-library/react'
import Login from "./login"

describe('Login', () => {
    it('Should not rendering error message', () => {
        const { getByTestId } = render(<Login />)
        expect(getByTestId('error-message')).toBeNull()
    })
})