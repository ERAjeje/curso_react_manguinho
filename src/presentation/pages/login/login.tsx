import { Button } from "@/presentation/components/button";
import Footer from "@/presentation/components/footer";
import Header from "@/presentation/components/header";
import { Input } from "@/presentation/components/input";
import React, { useState } from "react"
import { LoginContainer, LoginForm, LoginSignup } from './styles';
import Context, { StatusProps } from '@/presentation/contexts/form/form-context'

const Login: React.FC = () => {
  const [status] = React.useState<StatusProps>({
    isLoading: false,
    isButtonDisabled: true,
    isSpinnerVisible: false,
    errorMessage: ''
  })
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
    }

    return (
      <LoginContainer>
        <Header />
        <Context.Provider value={status}>
          <LoginForm onSubmit={handleSubmit}>
            <h4>Login</h4>
            <Input 
              type="email" 
              name="email" 
              data-testid='email-input' 
              defaultValue={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Digite seu e-mail *" />
            <Input
              type="password"
              name="password"
              data-testid='password-input'
              defaultValue={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Digite sua senha *"
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
