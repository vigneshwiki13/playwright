const base = require('@playwright/test')
//  json needs "" for keys but not javascript object, just "" for values is enough

exports.customtest = base.test.extend({
testDataForOrder: {
    username : "vigneshwiki1323@gmail.com",
   password : "Vignesh@1310",
   productName : "ADIDAS ORIGINAL"
}
})
