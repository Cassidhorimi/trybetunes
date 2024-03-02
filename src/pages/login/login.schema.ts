import { z } from 'zod';

export const loginSchema = z.object({
  user: z.string().min(3, 'Tem que ser maior que 3 caracteres!')
});

export type loginSchemaType = z.infer<typeof loginSchema>;
