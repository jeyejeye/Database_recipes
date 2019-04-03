const baseConfig = {
    port: 3000,
    db: {
        database: 'kitchen',
        username: 'home',
        password: 'gdvvz71',
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
