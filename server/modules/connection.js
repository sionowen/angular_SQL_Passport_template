// connection.js
var connectionString = 'postgres://localhost:5432/budget';

if(process.env.DATABASE_URL != undefined) {
    connectionString = process.env.DATABASE_URL + 'ssl';
} else {
    connectionString = 'postgres://localhost:5432/budget';
}

module.exports = connectionString;
