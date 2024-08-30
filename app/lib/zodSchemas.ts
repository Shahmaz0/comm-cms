import {z} from 'zod'

export const productSchema = z.object({
    name: z.string(),
    description: z.string(),
    status: z.enum(["draft", "published", "archived"]),
    price: z.number().min(1),
    images: z.array(z.string()).min(1, "Atleast one image is required"),
    category: z.enum(["men", "women"]),
    isFeatured: z.boolean().optional(),
  
})