import { render } from '@testing-library/react'
import Login from './login'

const makeSut = () => {
    const sut = render(<Login />)
    return { sut }
}

describe('Login', () => {
    it('Should not rendering Spinner component on start', () => {
        const { sut } = makeSut()
        expect(sut.getByTestId('form-button')).toBeTruthy()
    })

    it('Should button component to be disabled on start', () => {
        const { sut } = makeSut()
        expect(sut.getByTestId('form-button').hasAttribute('disabled')).toBeTruthy()
    })

    it('Should rendering inputs with initial state', () => {
        const { sut } = makeSut()
        const email = sut.getByTestId('email-input') as HTMLInputElement
        const password = sut.getByTestId('password-input') as HTMLInputElement
        expect(email.defaultValue).toBe('')
        expect(password.defaultValue).toBe('')
    })
})