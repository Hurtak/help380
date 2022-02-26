const fs = require("fs")
const path = require("path")

const executeSql = async (db, sqlFileName, upOrDown) => {
	const filePath = path.join(__dirname, "../sqls/", `${sqlFileName}-${upOrDown}.sql`)

	const data = await new Promise((resolve, reject) => {
		fs.readFile(filePath, { encoding: "utf-8" }, (err, data) => {
			if (err) {
				reject(err)
				return
			}
			resolve(data)
		})
	})

	return db.runSql(data)
}

module.exports = (sqlFileName) => {
	const setup = () => {}

	const up = (db) => {
		return executeSql(db, sqlFileName, "up")
	}

	const down = (db) => {
		return executeSql(db, sqlFileName, "down")
	}

	return {
		setup,
		up,
		down,
		_meta: {
			version: 1,
		},
	}
}
