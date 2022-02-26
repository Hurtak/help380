import { Button, Group, Space, Title } from "@mantine/core"
import Link from "next/link"

import { Layout } from "../src/layout"

const Index = () => (
	<Layout>
		<Title order={1}>Spojujeme pomocníky s potřebnými</Title>

		<Space h={"lg"} />

		<Group>
			<Button fullWidth>Nabízím pomoc</Button>
			<Button fullWidth>Potřebuju pomoc</Button>

			<Space h={"lg"} />

			<Link href="/for-organizations" passHref>
				<Button component="a" variant="default" fullWidth>
					Pro organizace
				</Button>
			</Link>
		</Group>
	</Layout>
)

export default Index
