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
})