const ExcelJs = require('exceljs');

async function excelTest(){
const workbook = new ExcelJs.Workbook();
await workbook.getWorksheet('C:\Users\Pc\Desktop\Automation tesing\AutoTestNotes\PlaywrightAutomation\ExcelDemo\exceldownloadtest.xlsx');
worksheet.eachRow((row,rowNumber)=>{
    row.eachCell((cell,eachCell)=>{
        console.log(cell.value())
    })

})}

excelTest()