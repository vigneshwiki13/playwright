import{test as baseTest} from '@playwright/test'
interface  TestDataForOrder {
    userName: string;
    password: string;
    productName: string;
}
//testDataForOrder error in this mouse hover get the idea, create interface remove:, extend with <{object: interfaceName}>({})
//  we declare normally like object also like
// let userName: { name: string, age: number, salary: any } = { name: "Vignesh", age: 29, salary: "25" }
    //userName.salary = "95000"

    //  export this to import on the main file(give const or let)
export const customTest = baseTest.extend<{testDataForOrder:TestDataForOrder}>({
testDataForOrder: {
    userName : "vigneshwiki1323@gmail.com",
   password : "Vignesh@1310",
   productName : "ADIDAS ORIGINAL"
}
})
