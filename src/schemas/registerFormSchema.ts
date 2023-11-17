import { z } from "zod";

export const registerFormSchema = z
  .object({
    full_name: z
      .string()
      .min(10, "O nome completo precisa conter pelo menos 10 caracteres")
      .max(80, "O nome completo poderá ter no máximo 80 caracteres"),
    email: z
      .string()
      .email("Digite um email válido")
      .max(45, "O email poderá ter no máximo 45 caracteres"),
    password: z
      .string()
      .min(6, "A senha é obrigatória e precisa de no mínimo 6 caracteres")
      .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número")
      .regex(/(?=.*[a-z])/, "É necessário ao menos uma letra minúscula")
      .regex(/(?=.*?[A-Z])/, "É necessário ao menos uma letra maiúscula")
      .regex(/(?=.*[$*&@#])/, "É necessário pelo menos um caractere especial"),
    confirm: z.string().nonempty("A confirmação de senha é obrigatória"),
    phone: z
      .string()
      .min(11, "O Telefone precisa conter pelo menos 10 caracteres")
      .max(12, "O Telefone poderá ter no máximo 11 caracteres"),
  })
  .refine(({ password, confirm }) => password === confirm, {
    message: "As senhas precisam corresponderem",
    path: ["confirm"],
  });

export type TRegisterFormValues = z.infer<typeof registerFormSchema>;
