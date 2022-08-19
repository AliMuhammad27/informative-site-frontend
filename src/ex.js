import { toCsv, download } from "./Util/Helpers";
const table = document.getElementById("exportMe");
console.log("exportBtn", exportBtn);
console.log("exportMe", table);
if (exportBtn & table) {
  console.log("exportBtn & table");
  exportBtn.addEventListener("click", function () {
    const csv = toCsv(table);
    download(csv, "Record.csv");
  });
}
