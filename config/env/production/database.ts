export default ({ env }) => ({
	connection: {
		client: 'postgres',
		connection: {
		host: env('DATABASE_HOST', 'localhost'),
			port: env.int('DATABASE_PORT', 5432),
			database: env('DATABASE_NAME', 'gbms-strapi'),
			user: env('DATABASE_USERNAME', 'gbms-strapi'),
			password: env('DATABASE_PASSWORD', 'test'),
			ssl: env.bool('DATABASE_SSL', false)
		}
	}
});
