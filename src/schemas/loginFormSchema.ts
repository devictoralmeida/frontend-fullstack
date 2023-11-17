import { z } from "zod";

export const loginFormSchema = z.object({
  email: z
    .string()
    .email("Digite um email válido")
    .max(45, "O email poderá ter no máximo 45 caracteres"),
  password: z
    .string()
    .min(6, "A senha é obrigatória e precisa de no mínimo 6 caracteres"),
});

export type TLoginFormValues = z.infer<typeof loginFormSchema>;
