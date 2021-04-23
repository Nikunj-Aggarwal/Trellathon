const tableName = "users";

const userTable = `CREATE TABLE ${tableName} (
userId SERIAL PRIMARY KEY,
username VARCHAR(50) NOT NULL,
phoneNo VARCHAR(15) NOT NULL,
sex VARCHAR(15) NOT NULL,
uploadCount INTEGER
);`;

module.exports = userTable;