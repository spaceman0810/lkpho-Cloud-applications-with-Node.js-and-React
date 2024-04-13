module.exports.getDate = function getDate() {
    let aestTime = new Date().toLocaleString("en-UK", {timeZone: "Australia/Brisbane"});
    return new Date(aestTime);
}
