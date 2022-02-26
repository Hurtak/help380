import { z } from "zod"

const env = z
	.object({
		NODE_ENV: z.string().optional(),
		PORT: z.number().optional(),
	})
	.parse(process.env)

const isProduction = env.NODE_ENV === "production"

export const config = {
	port: env.PORT ?? 3000,
	isProduction,
	isDev: !isProduction,
}
