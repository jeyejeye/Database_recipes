const baseConfig = {
    port: 3000,
    db: {
        database: 'kitchen',
        username: 'postgres',
        password: '123',
        host: 'localhost',
        dialect: 'postgres',
        port: 5432,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    },
};

export default baseConfig;
