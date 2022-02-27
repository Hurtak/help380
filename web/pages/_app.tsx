import "../src/global-styles.css"

import { MantineProvider } from "@mantine/core"
import { AppProps } from "next/app"

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
	<>
		<MantineProvider withNormalizeCSS>
			<Component {...pageProps} />
		</MantineProvider>
	</>
)

export default MyApp
