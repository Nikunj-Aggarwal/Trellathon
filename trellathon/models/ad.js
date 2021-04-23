const tableName = "ad";

const adTable = `CREATE TABLE ${tableName} (
productId SERIAL PRIMARY,
discount INTEGER NOT NULL,
productName VARCHAR(100) NOT NULL,
price INTEGER NOT NULL,
imageUrl VARCHAR(256) NOT NULL,
tag VARCHAR(50) NOT NULL
);`;

module.exports = adTable;