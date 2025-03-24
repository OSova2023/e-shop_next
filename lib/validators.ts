import {z} from 'zod'
import { formatNumberWithCommas } from './utils'

const currency = z.string().refine((value) => /^\d+(\.\d{2})?$/.test(formatNumberWithCommas(Number(value))))

export const InsertProductSchema = z.object({
    name: z.string().min(3, 'Имя - должно быть минимум 3 буквы'),
    slug: z.string().min(3, 'Слаг - должно быть минимум 3 буквы'),
    category: z.string().min(3, 'Имя - должно быть минимум 3 буквы'),
    brand: z.string().min(3, 'Имя - должно быть минимум 3 буквы'),
    description: z.string().min(3, 'Имя - должно быть минимум 3 буквы'),
    stock: z.coerce.number(),
    images: z.array(z.string().min(1, 'Имя - должно быть минимум 3 буквы')),
    isFeatured: z.boolean(),
    banner: z.string().nullable(),
    price: currency,

})

// export type InsertProductSchemaType = z.infer<typeof insertProductSchema>