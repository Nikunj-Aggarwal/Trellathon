const tableName = "userTag";

const userTagTable = `CREATE TABLE ${tableName} (
userId INTEGER,
tagId INTEGER,
tagName VARCHAR(50),  
tagCount INTEGER
);`;

module.exports = userTagTable;