import { z } from 'zod';

export const FormSchema = z.object({
  fullName: z.string({
    required_error: 'Name is required',
  }),
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email({
      message: 'Must be a valid email',
    }),
  message: z.string({
    required_error: 'Message is required',
  }),
});
