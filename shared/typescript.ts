export const never = (value: never): never => {
	throw new Error(`This part of code should never be reached. ${JSON.stringify(value)}`)
}
