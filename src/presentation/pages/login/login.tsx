import Image from "@/presentation/components/logo";
import Spinner from "@/presentation/components/spinner/spinner";
import React from "react"
import { LoginContainer, LoginFooter, LoginForm, LoginHeader, LoginSignup } from './style';

const Login: React.FC = () => {
    const [success, setSuccess] = React.useState(true);

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
        <LoginHeader>
          <Image />
          <h1>Nome do Sistema</h1>
        </LoginHeader>
        <LoginForm onSubmit={handleSubmit}>
          <h4>Login</h4>
          <input type="email" name="email" placeholder="Digite seu e-mail" />
          <input
            type="password"
            name="password"
            placeholder="Digite sua senha"
          />
          {success ? <button type="submit">Entrar</button> : <Spinner />}
          <LoginSignup href="#">Criar conta</LoginSignup>
        </LoginForm>
        <LoginFooter />
      </LoginContainer>
    )
}

export default Login
