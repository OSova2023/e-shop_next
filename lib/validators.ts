import { z } from "zod";
import { formatNumberWithCommas } from "./utils";

const currency = z
  .string()
  .refine((value) =>
    /^\d+(\.\d{2})?$/.test(formatNumberWithCommas(Number(value)))
  );

export const insertProductSchema = z.object({
  name: z.string().min(3, "Имя - должно быть минимум 3 буквы"),
  slug: z.string().min(3, "Слаг - должно быть минимум 3 буквы"),
  category: z.string().min(3, "Категория - должно быть минимум 3 буквы"),
  brand: z.string().min(3, "Брэнд - должно быть минимум 3 буквы"),
  description: z.string().min(3, "Описание - должно быть минимум 3 буквы"),
  stock: z.coerce.number(),
  images: z.array(z.string()).min(1, "Должно быть хотя бы 1 фото"),
  isFeauted: z.boolean(),
  banner: z.string().nullable(),
  price: currency,
});
