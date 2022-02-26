import { Button, Center, Group, Space, Title } from "@mantine/core"
import { SegmentedControl } from "@mantine/core"
import Link from "next/link"
import { useState } from "react"
import { useTranslation } from "react-i18next"

import { languages } from "../src/i18n"
import { Layout } from "../src/layout"

const Language = ({ children }: { children: string }) => <Center>{children}</Center>

const languagesSwitch = [
	{ value: languages.en, label: <Language>🇺🇸 English</Language> },
	{ value: languages.cs, label: <Language>🇨🇿 Česky</Language> },
]

const Index = () => {
	const { t, i18n } = useTranslation()
	const [language, setLanguage] = useState(languages.en)

	return (
		<Layout>
			<SegmentedControl
				size="xs"
				value={language}
				onChange={(l) => {
					setLanguage(l)
					void i18n.changeLanguage(l)
				}}
				data={languagesSwitch}
			></SegmentedControl>

			<Title order={1}>{t("index.title")}</Title>

			<Space h={"lg"} />

			<Group spacing="xs">
				<Button fullWidth>{t("index.offerHelp")}</Button>
				<Button fullWidth>{t("index.needHelp")}</Button>
			</Group>

			<Space h={"lg"} />

			<Link href="/for-organizations" passHref>
				<Button component="a" variant="default" fullWidth>
					{t("index.forOrganizations")}
				</Button>
			</Link>
		</Layout>
	)
}

export default Index
