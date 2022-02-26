const { NODE_ENV, PORT } = process.env

const isProduction = NODE_ENV === "production"
const port = (() => {
	const portDefault = 3000
	if (!PORT) return portDefault

	const portParsed = Number(PORT)
	if (Number.isNaN(portParsed)) return portDefault

	return portParsed
})()

export const config = {
	port,
	isProduction,
	isDev: !isProduction,
}
