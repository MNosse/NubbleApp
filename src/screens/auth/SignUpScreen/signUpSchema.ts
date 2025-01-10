import {z} from 'zod';

const userNameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gim;

export const signUpSchema = z.object({
  email: z.string().email('E-mail inválido'),
  fullName: z
    .string()
    .max(64, 'Nome deve ter no máximo 64 caracteres')
    .transform(value => {
      return value
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
    }),
  password: z.string().min(8, 'Senha deve ter no mínimo 8 caracteres'),
  username: z.string().regex(userNameRegex, 'Username inválido').toLowerCase(),
});

export type SignUpSchema = z.infer<typeof signUpSchema>;
