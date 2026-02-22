function doGet() {
  const template = HtmlService.createTemplateFromFile('index');
  
  template.eventName = CONFIG.EVENT_NAME;
  template.folderId = CONFIG.FOLDER_ID;
  template.ui = CONFIG.UI_TEXT; 
  
  // 💡 追加：正しいウェブアプリのURLを取得して画面に渡す
  template.webAppUrl = ScriptApp.getService().getUrl();
  
  return template.evaluate()
    .setTitle(CONFIG.EVENT_NAME + ' 写真アップロード')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}  

function uploadFile(data, filename, mimeType) {
  try {
    const folder = DriveApp.getFolderById(CONFIG.FOLDER_ID);
    // 最新のものが一番上に来るようにするハック
    const reverseTimestamp = 9999999999999 - Date.now();
    const newFileName = reverseTimestamp + '_' + filename;
    
    const blob = Utilities.newBlob(Utilities.base64Decode(data), mimeType, newFileName);
    folder.createFile(blob);
    
    return 'success';
  } catch (error) {
    return error.toString();
  }
}