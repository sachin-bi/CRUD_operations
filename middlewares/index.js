const fs = require("fs");

function logReqRes(filename) {
    return (req, res, next) => {
        console.log(" -Hello from middleware 1");

        fs.appendFile(
            filename,
            `\n${Date.now()}:  ip|${req.ip}|  :${req.method}:  ${req.path}`,
            (err, data) => {
                next();
            }
        );
    };
}

module.exports = {
    logReqRes,
};