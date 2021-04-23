const tableName = "userFollow";

const userFollowTable = `CREATE TABLE ${tableName} (
userId INTEGER NOT NULL,
followId INTEGER NOT NULL
);`;

module.exports = userFollowTable;