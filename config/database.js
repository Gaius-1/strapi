module.exports = ({ env }) => ({
    connection: {
        client: 'postgres',
        connection: {
            connectionString: env('DATABASE_URL'),
            ssl: env.bool('DATABASE_SSL', false) && {
                rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', false)
            }
        },
        debug: false,
        pool: { 
            min: 0, 
            max: 3,
            acquireTimeoutMillis: 30000,
            createTimeoutMillis: 30000,
            destroyTimeoutMillis: 5000,
            idleTimeoutMillis: 30000,
            reapIntervalMillis: 1000,
            createRetryIntervalMillis: 200,
        },
        acquireConnectionTimeout: 30000,
    }
});