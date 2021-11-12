import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

import {
  LoginButton,
  ContainerLogin,
  InputLogin,
  DivLogin,
  ErrorSpan,
} from "./styles";

import Display from "../Display";

const Login = ({ logged, setLogged, otherLogged, setOtherLogged }) => {
  const formSchema = yup.object().shape({
    username: yup.string().required("Nome do usuário obrigatório"),
    password: yup.string().required("Insira sua senha"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    axios
      .post("https://kenzieshop.herokuapp.com/sessions/", data)
      .then((response) => {
        setLogged(true);
        setOtherLogged(false);
        console.log(response);
      })
      .catch((error) => {
        setLogged(false);
        setOtherLogged(true);
        console.log(error);
      });
  };

  return (
    <>
      <DivLogin>
        <h1>Sign in</h1>
        <img
          src="https://www.iconpacks.net/icons/2/free-user-login-icon-3057-thumb.png"
          alt="user"
        />
        <ContainerLogin onSubmit={handleSubmit(onSubmitFunction)}>
          <InputLogin placeholder="Usuário *" {...register("username")} />
          <ErrorSpan>{errors.username && errors.username.message}</ErrorSpan>
          <InputLogin
            placeholder="Senha *"
            type="password"
            {...register("password")}
          />
          <ErrorSpan>{errors.password && errors.password.message}</ErrorSpan>
          <LoginButton type="submit">Login</LoginButton>
        </ContainerLogin>
      </DivLogin>
      <Display logged={logged} otherLogged={otherLogged} />
    </>
  );
};

export default Login;
