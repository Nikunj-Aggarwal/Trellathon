const tableName = "userVideo";

const userVideoTable = `CREATE TABLE ${tableName} (
userId INTEGER NOT NULL,
videoId SERIAL,
videoURL VARCHAR(256) NOT NULL,  
likes INTEGER,
views INTEGER,
commentId SERIAL
);`;

module.exports = userVideoTable;