import { config } from "./config"
import { expressService } from "./services/express"

const main = async (): Promise<void> => {
	await expressService({
		config: {
			port: config.port,
			production: config.isProduction,
		},
	})
}

void main()
