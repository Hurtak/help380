const { NODE_ENV, PORT } = process.env

const isProduction = NODE_ENV === "production"

export const config = {
	port: Number(PORT) || 3000,
	isProduction,
	isDev: !isProduction,
}
