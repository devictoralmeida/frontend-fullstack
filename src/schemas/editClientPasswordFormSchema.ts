import { z } from "zod";

export const editClientPasswordFormSchema = z.object({
  password: z
    .string()
    .min(6, "A senha é obrigatória e precisa de no mínimo 6 caracteres")
    .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número")
    .regex(/(?=.*[a-z])/, "É necessário ao menos uma letra minúscula")
    .regex(/(?=.*?[A-Z])/, "É necessário ao menos uma letra maiúscula")
    .regex(/(?=.*[$*&@#!])/, "É necessário pelo menos um caractere especial"),
  confirm: z
    .string()
    .min(
      6,
      "A confirmação de senha é obrigatória e deve ter pelo menos 6 caracteres"
    ),
});

export type TEditClientPasswordForm = z.infer<
  typeof editClientPasswordFormSchema
>;
