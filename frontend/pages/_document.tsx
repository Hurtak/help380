import Document, { Head, Html, Main, NextScript } from "next/document"
import * as React from "react"

import { config } from "../src/config"

export default class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<meta name="viewport" content="initial-scale=1.0, width=device-width, shrink-to-fit=no" />
					<link rel="icon" href="/favicon.ico" />

					{/* eslint-disable-next-line @next/next/no-title-in-document-head */}
					<title>{config.title}</title>
				</Head>

				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
