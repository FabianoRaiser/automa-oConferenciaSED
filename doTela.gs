function onOpen() {
  try {
  SpreadsheetApp.getUi()
    .createMenu('Conferencia')
    // .addItem('Presença', 'showDialog')
    .addItem('Presença', 'showSidebar')
    .addToUi();

  } catch(e) {
    alert('Ocorreu um erro. Veja o inspecionar.')
    console.log('Falhou com o erro: %s', e.error);
  }
}

function showDialog() {
  var tela = HtmlService.createTemplateFromFile('tela').evaluate();
  var html = tela
    .setWidth(400)
    .setHeight(300);
  SpreadsheetApp.getUi().showModalDialog(html, "Conferencia Presença");
}

function showSidebar() {
  var tela = HtmlService.createTemplateFromFile('tela').evaluate();
  var html = tela
    .setTitle('Conferencia Presença');
  SpreadsheetApp.getUi()
    .showSidebar(html);
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
