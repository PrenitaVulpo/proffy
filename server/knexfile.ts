import path from 'path';

module.exports = {
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'src', 'db', 'databae.sqlite')
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'db', 'migrations')
    },
    useNullAsDefault: true    
}