const tableName = "userVideo";

const userVideoTable = `CREATE TABLE ${tableName} (
userId INTEGER NOT NULL,
videoId SERIAL,
videoURL VARCHAR(256) NOT NULL,  
likes VARCHAR(15) NOT NULL,
views VARCHAR(15) NOT NULL,
commentId SERIAL
);`;

module.exports = userVideoTable;