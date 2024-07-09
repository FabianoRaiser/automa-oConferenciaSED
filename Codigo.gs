let semafore = true;


// !!!!!!!! NÃO MEXER DAQUI PARA BAIXO !!!!!!!
function conferenciaPresenca(presenca, presencaIntervalo, controle, controleIntervalo, colunaControle) {
  const idPlanPresenca = presenca;
  const idPlanControle = controle;

  const planPresenca = SpreadsheetApp.openByUrl(idPlanPresenca);
  const planControle = SpreadsheetApp.openByUrl(idPlanControle);

  const coluna = colunaControle;
  const horas = planControle.getSheets()[0].getRange(coluna + "9").getValue();

  const rangePresenca = presencaIntervalo;
  const rangeControle = controleIntervalo;

  const valuesPresenca = planPresenca.getRange(rangePresenca).getValues();
  const valuesControle = planControle.getRange(rangeControle).getValues();

  for (let i = 0; i < valuesPresenca.length; i++) {
    for (let k = 0; k < valuesControle.length; k++) {
      let cellsPresenca = `A${i + 1}:B${i + 1}`;
      let cellControle = coluna + (k + 1);

      if (valuesPresenca[i][1] == valuesControle[k][0]) {
      // Verificação da matricula
        Logger.log(i)
        planPresenca.getSheets()[0].getRange(cellsPresenca).setBackground("#00FF00");
        // Logger.log(cellControle);
        // Logger.log(k);
        // Logger.log(valuesPresenca[i][0]);
        // Logger.log(valuesControle[k][0]);
        planControle.getSheets()[0].getRange(cellControle).setValue(horas);
        Logger.log("Cell: " + planControle.getSheets()[0].getRange(cellControle).getA1Notation());
        break;
      } else if (valuesPresenca[i][1] == valuesControle[k][1]) {
        // Verificação da matricula Nova
        planPresenca.getSheets()[0].getRange(cellsPresenca).setBackground("#00FF00");
        planControle.getSheets()[0].getRange(cellControle).setValue(horas);
        Logger.log("Cell: " + planControle.getSheets()[0].getRange(cellControle).getA1Notation());
        break;
      } else {
        // Se não econtrar, pinta de laranja
        planPresenca.getSheets()[0].getRange(cellsPresenca).setBackground("#f5b042")
      }
    }
  }
  console.log("Processo Concluido")
}

function processForm({ presenca, controle, interPresenca, interControle, coluna }) {
  semafore = false;
  console.log(`${typeof (presenca)}, ${typeof (controle)}, ${typeof (interPresenca)}, ${typeof (interControle)}, ${typeof (coluna)}`)
  conferenciaPresenca(presenca, interPresenca, controle, interControle, coluna)
  semafore = false;
}

function getSemafore(){
  return semafore;

}
