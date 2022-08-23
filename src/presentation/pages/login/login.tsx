import { Button } from "@/presentation/components/button";
import Footer from "@/presentation/components/footer";
import Header from "@/presentation/components/header";
import { Input } from "@/presentation/components/input";
import React from "react"
import { LoginContainer, LoginForm, LoginSignup } from './styles';
import Context, { StatusProps } from '@/presentation/contexts/form/form-context'

const Login: React.FC = () => {
  const [status] = React.useState<StatusProps>({
    isLoading: false,
    isButtonDisabled: true,
    isSpinnerVisible: false,
    errorMessage: ''
  })

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
    }

    return (
      <LoginContainer>
        <Header />
        <Context.Provider value={status}>
          <LoginForm onSubmit={handleSubmit}>
            <h4>Login</h4>
            <Input type="email" name="email" placeholder="Digite seu e-mail" />
            <Input
              type="password"
              name="password"
              placeholder="Digite sua senha"
            />
            <Button type="submit" onClick={() => handleSubmit}>Entrar</Button>
            <LoginSignup href="#">Criar conta</LoginSignup>
          </LoginForm>
        </Context.Provider>
        <Footer />
      </LoginContainer>
    )
}

export default Login
