import { z } from "zod";

export const addContactFormSchema = z.object({
  full_name: z
    .string()
    .min(10, "O nome completo precisa conter pelo menos 10 caracteres")
    .max(80, "O nome completo poderá ter no máximo 80 caracteres"),
  email: z
    .string()
    .email("Digite um email válido")
    .max(45, "O email poderá ter no máximo 45 caracteres"),
  phone: z
    .string()
    .min(11, "O Telefone precisa conter pelo menos 10 caracteres")
    .max(12, "O Telefone poderá ter no máximo 11 caracteres"),
});

export type TAddContactFormValues = z.infer<typeof addContactFormSchema>;
