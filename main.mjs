import { google } from "googleapis";
import credentialsJson from "./taifex-crawling-b5ba273f0237.json" assert { type: "json" };

let credentials;
const env = process.env.NODE_ENV || "development";
console.log("env", env);
if (env === "development") {
  credentials = credentialsJson;
} else {
  credentials = JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS);
}
const spreadsheetId = "1AWiDxtZO04P8NMx9Wg6pfgeXDgsVjxruKjJG3i5zzGc"; // Replace with your Google Sheets spreadsheet ID
const sheetName = "sheet1"; // Replace with the name of the sheet in your Google Sheets
const range = "A:E"; // Specify the range where you want to write the data
// Initialize the Google Sheets API client
const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});
const client = google.sheets({ version: "v4", auth });
// Load credentials from the JSON key file
//

// // Function to write data to Google Sheets
// async function writeToGoogleSheets(spreadsheetId, range, data) {
//   try {
//     await client.spreadsheets.values.append({
//       spreadsheetId,
//       range,
//       valueInputOption: "RAW",
//       requestBody: {
//         values: data,
//       },
//     });
//     console.log("Data written to Google Sheets.");
//   } catch (error) {
//     console.error("Error writing data to Google Sheets:", error);
//   }
// }
//
// async function crawlAndWriteToSheets() {
//   const url = "https://example.com/api/data"; // Replace with your API endpoint
//   const filePath = "data.csv"; // Specify the file path to save the CSV data
//   const sheetName = "sheet1"; // Replace with the name of the sheet in your Google Sheets
//   const range = "A:E"; // Specify the range where you want to write the data
//
//   // Fetch data from the website
//
//   // Write the data to Google Sheets
//   await writeToGoogleSheets(spreadsheetId, range, [
//     [1, "Alice"],
//     [2, "Bob"],
//     [3, "Charlie"],
//   ]);
// }
//
// crawlAndWriteToSheets();
// async function readGoogleSheet(googleSheetClient, sheetId, tabName, range) {
//   const res = await googleSheetClient.spreadsheets.values.get({
//     spreadsheetId: sheetId,
//     range: `${tabName}!${range}`,
//   });
//
//   console.log(res.data.values);
//   return res.data.values;
// }
// readGoogleSheet(client, spreadsheetId, sheetName, range);
