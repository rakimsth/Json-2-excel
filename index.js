const fs = require("fs");
const json2xls = require("json2xls");

class Json2XLS {
  constructor() {}

  getData() {
    //read the raw json data
    let rawdata = fs.readFileSync("./rawData.json");
    let compileData = JSON.parse(rawdata);
    let results = [];
    for (let d of compileData) {
      let finalData = {
      //further process the data like... destructuring the array into object item (optional)
      };
      results.push(finalData);
      //write the further processed data into another file (optional)
      fs.writeFileSync("./final.json", JSON.stringify(results, null, 4));
    }
    // excel's data will be exports, which you probably get it from server.
    let data = fs.readFileSync("./final.json");
    let json = JSON.parse(data);
    try {
      var xls = json2xls(json);
      fs.writeFileSync("data.xlsx", xls, "binary");
    } catch (e) {
      console.error("export error");
    }
  }
}
let convert = new Json2XLS();
convert.getData();
