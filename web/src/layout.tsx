import { Container, createStyles } from "@mantine/core"
import { FC } from "react"

export const Layout: FC = ({ children }) => {
	const styles = useStyles()

	return (
		<Container size={400} className={styles.classes.container}>
			{children}
		</Container>
	)
}

const useStyles = createStyles((theme) => ({
	container: {
		paddingTop: theme.spacing.lg,
		paddingBottom: theme.spacing.lg,
	},
}))
