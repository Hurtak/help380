const isProduction = process.env.NODE_ENV === "production"

export const config = {
	port: 3000,
	isProduction,
	isDev: !isProduction,
}
