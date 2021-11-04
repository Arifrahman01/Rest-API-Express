module.exports = {
	user: "localhost",
	password: "",
	server: "1ocalhost",
	database: "nama_db",
	options: {
		trustServerCertificate: true,
		abortTransactionOnError: true,
		pool: {
			max: 999,
			min: 0,
			idleTimeoutMillis: 30000
		}
	}
}