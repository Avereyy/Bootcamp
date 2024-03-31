function doGet(e) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Responses");
    var data = sheet.getDataRange().getValues();
    var jsonData = JSON.stringify(data);
    return ContentService.createTextOutput(jsonData).setMimeType(ContentService.MimeType.JSON);
  }
  
