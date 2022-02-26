import cors from "cors"
import express from "express"
import * as path from "path"

export const expressService = async ({
	config: { production, port },
}: {
	config: {
		production: boolean
		port: number
	}
}) => {
	const app = express()

	if (production) {
		//
	} else {
		// On dev we have FE running on different domain (port is different)
		app.use(cors())
	}

	//
	// Other Routes
	//
	app.use("/", express.static(path.join(__dirname, "../../../frontend")))
	app.use("/api/hello", (_, res) => {
		res.send("hello")
	})

	//
	// Start
	//
	await new Promise((resolve) => {
		app.listen(port, () => {
			console.log(`Web server started on http://localhost:${port}`)
			resolve(null)
		})
	})

	return app
}
