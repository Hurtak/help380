const isProduction = Boolean(process.env.NEXT_PUBLIC_PRODUCTION_BUILD)
const apiDomain = isProduction ? "" : "http://localhost:3000"

export const config = {
	isProduction,
	isDev: !isProduction,

	apiDomain: apiDomain,

	title: "help123",
}
