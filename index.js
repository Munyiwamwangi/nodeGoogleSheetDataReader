const {
  client_email,
  client_id,
} = require("./sanergy-intranet-1e528e90bfdd.json");

const { GoogleSpreadsheet } = require("google-spreadsheet");

const readFromSheets = async () => {
  const doc = new GoogleSpreadsheet(
    "1Ozb7V56X0lRjT2HxjslfukOtYNiwdNFnYfFfqD9UsAs"
  );

  await doc.useServiceAccountAuth(
    require("./sanergy-intranet-1e528e90bfdd.json")
  );
  await doc.loadInfo();

  const indexes = [1, 4];
  for (let index of indexes) {
    const sheet = doc.sheetsByIndex[index]; // or use doc.sheetsById[id]

    console.log(sheet.title);
    console.log(sheet.rowCount);
    // read rows
    const rows = await sheet.getRows({}); // can pass in { limit, offset }
    if (rows.length) {
      // console.log(rows);
      console.log(rows[0].MON);
      console.log(rows[0].TUE, "02/06");
      console.log(rows[0].WED);
    } else {
      console.log("No data found.");
    }
  }
};

readFromSheets();
