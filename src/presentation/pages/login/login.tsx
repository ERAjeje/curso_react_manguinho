import Footer from "@/presentation/components/footer";
import Header from "@/presentation/components/header";
import { Input } from "@/presentation/components/input";
import Spinner from "@/presentation/components/spinner/spinner";
import React from "react"
import { LoginContainer, LoginForm, LoginSignup } from './styles';

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
        <Header />
        <LoginForm onSubmit={handleSubmit}>
          <h4>Login</h4>
          <Input type="email" name="email" placeholder="Digite seu e-mail" />
          <Input
            type="password"
            name="password"
            placeholder="Digite sua senha"
          />
          {success ? <button type="submit">Entrar</button> : <Spinner />}
          <LoginSignup href="#">Criar conta</LoginSignup>
        </LoginForm>
        <Footer />
      </LoginContainer>
    )
}

export default Login
