import { FormStyles } from "../../styles/form";
import HashLoader from "react-spinners/HashLoader";
import { StyledParagraph } from "../../styles/typography";
import { StyledHeadline1 } from "../../styles/typography";
import Input from "../Input/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  TRegisterFormValues,
  registerFormSchema,
} from "../../schemas/registerFormSchema";
import { StyledLoaderContainer } from "../../styles/grid";
import { StyledButton } from "../../styles/buttons";
import { useClientContext } from "../../providers/ClientContext";
import { useState } from "react";

const RegisterForm = () => {
  const { clientRegister } = useClientContext();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TRegisterFormValues>({
    resolver: zodResolver(registerFormSchema),
  });

  const submit: SubmitHandler<TRegisterFormValues> = async (formData) => {
    await clientRegister(formData, setLoading);
    reset();
  };

  return (
    <>
      {loading ? (
        <StyledLoaderContainer>
          <HashLoader color="#ff427f" />
        </StyledLoaderContainer>
      ) : (
        <FormStyles onSubmit={handleSubmit(submit)} noValidate>
          <StyledHeadline1 fontweight="bold" fontsize="big">
            Registre o cliente
          </StyledHeadline1>
          <StyledParagraph>Preencha os dados abaixo</StyledParagraph>
          <Input
            type="text"
            id="name"
            placeholder="Nome completo do cliente"
            label="Nome"
            error={errors.full_name}
            disabled={loading}
            {...register("full_name")}
          />
          <Input
            type="email"
            id="email"
            placeholder="E-mail do cliente"
            label="E-mail"
            error={errors.email}
            disabled={loading}
            {...register("email")}
          />
          <Input
            type="password"
            id="password"
            placeholder="Digite aqui a senha"
            label="Senha"
            error={errors.password}
            disabled={loading}
            {...register("password")}
          />
          <Input
            type="password"
            id="confirm"
            placeholder="Digite novamente sua senha"
            label="Confirmar Senha"
            error={errors.confirm}
            disabled={loading}
            {...register("confirm")}
          />
          <Input
            type="text"
            id="phone"
            placeholder="Digite o telefone do cliente"
            label="Contato"
            error={errors.phone}
            disabled={loading}
            {...register("phone")}
          />
          {Object.keys(errors).length !== 0 ? (
            <StyledButton
              buttonsize="big"
              buttonstyle="invalid"
              disabled={true}
            >
              {loading ? "Cadastrando..." : "Cadastrar"}
            </StyledButton>
          ) : (
            <StyledButton
              buttonsize="big"
              buttonstyle="primary"
              disabled={false}
            >
              {loading ? "Cadastrando..." : "Cadastrar"}
            </StyledButton>
          )}
        </FormStyles>
      )}
    </>
  );
};

export default RegisterForm;
