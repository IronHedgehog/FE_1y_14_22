const form = document.getElementById("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());
  const response = await fetch(
    "Тут має буть посилання на ваш додаток таблиці",
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      mode: "no-cors",
    }
  );
}); 


// function doPost(e) {
//   let sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
//   let data = JSON.parse(e.postData.contents);
//   sheet.appendRow([data.name, data.email, data.message]);

//   let response = {
//     status: "success",
//   };

//   return HtmlService.createHtmlOutput(JSON.stringify(response))
//     .setContentType(ContentService.MimeType.JSON)
//     .addMetaTag("Access-Control-Allow-Origin", "*");
// }
