const tableName = "videoTag";

const videoTagTable = `CREATE TABLE ${tableName} (
userId INTEGER,
tagId SERIAL PRIMARY,
tagName VARCHAR(15) NOT NULL
);`;

module.exports = videoTagTable;