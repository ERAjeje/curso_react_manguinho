import React from "react"
import { LoginContainer, LoginForm, LoginSignup } from './styles';
import { Button, Error, Footer, Header, Input } from "@/presentation/components";

const Login: React.FC = () => {
    const [success, setSuccess] = React.useState(true);
    const [error, setError] = React.useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        setTimeout(() => {
            setSuccess(false);
        }, 500);
        setTimeout(() => {
            setSuccess(true);
        }, 1500);
        event.preventDefault();
    }
    return (
      <LoginContainer>
        <Header />
        <LoginForm onSubmit={handleSubmit}>
          <h4>Login</h4>
          <Input type="email" name="email" placeholder="Digite seu e-mail" />
          <Input
            type="password"
            name="password"
            placeholder="Digite sua senha"
          />
          <Button type="submit" disabled={false} onClick={() => handleSubmit} showSpinner={!success}>Entrar</Button>
          <LoginSignup href="#">Criar conta</LoginSignup>
          {error && <Error message="Usuário ou senha inválidos" />}
        </LoginForm>
        <Footer />
      </LoginContainer>
    )
}

export default Login
