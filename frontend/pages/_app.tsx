import "../src/global-styles.css"

import { MantineProvider } from "@mantine/core"
import { AppProps } from "next/app"
import * as React from "react"

const MyApp = ({ Component, pageProps }: AppProps) => (
	<>
		<MantineProvider>
			<Component {...pageProps} />
		</MantineProvider>
	</>
)

export default MyApp
