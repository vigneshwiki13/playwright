const ExcelJs = require('exceljs');
const {test,expect}=require('@playwright/test');

async function excelWrite(textSearch,updatedValue,change,downloadsPath) {
const workbook = new ExcelJs.Workbook();   
await workbook.xlsx.readFile(downloadsPath);
 const worksheet = workbook.getWorksheet('Sheet1');

let cellValue = await excelRead(worksheet,textSearch)  // await needed for read method
const cell1 = worksheet.getCell(cellValue.row, cellValue.column+change.colChange) 
cell1.value= updatedValue
await workbook.xlsx.writeFile(downloadsPath)  // await
}


async function excelRead(worksheet,textSearch){
    let cellValue ={row:-1,column:-1}
         
    worksheet.eachRow((row, rowNumber) => {
        row.eachCell((cell, colNumber) => {
               if (cell.value === textSearch) {
                cellValue.row = rowNumber
                cellValue.column = colNumber
                            }
        })
    }
    )
    
return cellValue
}

//  we can sent js object too


test('upload and download validation',async ({page})=>{
     const downloadsPath = 'C:/Users/Pc/Downloads/download.xlsx';
     const textSearch= "Mango";
     const updatedValue = 300;
    await page.goto("https://rahulshettyacademy.com/upload-download-test/index.html");
    //  make a promise  to wait until the download is finished
    const downloadPromise= page.waitForEvent('download');
    
    await page.click('button[id="downloadButton"]');
    const download = await downloadPromise;
    await download.saveAs(downloadsPath);

    await  excelWrite(textSearch,updatedValue,{rowchange: 0, colChange: 2},downloadsPath)
    // await page.locator('#fileinput').click();
    await page.pause();
    await page.locator('#fileinput').setInputFiles(downloadsPath);
    
    //  setinputfiles works only if attribute [type = file]

    const desiredRow = page.getByRole('row').filter({has: page.getByText(textSearch)})
    await expect(desiredRow.locator('#cell-4-undefined')).toContainText(updatedValue.toString())
    //  toContainText() accepts only string
})