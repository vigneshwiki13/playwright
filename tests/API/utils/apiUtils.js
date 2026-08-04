class ApiUtils
{   constructor(apiContext, loginPayload){
this.apiContext = apiContext;
this.loginPayload = loginPayload;
}
async getToken(){
  const loginResponse =  await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
        {
            data: this.loginPayload
        }
    )
    const loginResponseJson = await loginResponse.json();
    console.log(loginResponseJson)
    const loginresponseText = await loginResponse.text()
// console.log(loginresponseText)
    const loginresponseBody = await loginResponse.body()
    // console.log(loginresponseBody)
    const loginresponseStatus = await loginResponse.status()
    console.log(loginresponseStatus)
    const loginresponseStatustext = await loginResponse.statusText()
    // console.log(loginresponseStatustext)
    const loginresponseOk = await loginResponse.ok()
    // console.log(loginresponseOk)
    const loginresponseUrl = await loginResponse.url()
    console.log(loginresponseUrl)
    const loginresponseHeaders = await loginResponse.headers()
    console.log(loginresponseHeaders)
    const loginresponseHeadersArray = await loginResponse.headersArray()
    // console.log(loginresponseHeadersArray)
    // const loginresponseServerAddr = await loginResponse.serverAddr()
    // console.log(loginresponseServerAddr)
    // APIResponse objects in Playwright do not have a .serverAddr() method. That method exists only on Response objects from page requests (browser context), not on API calls made via apiContext.post().
    // const loginresponseSecurityDetails = await loginResponse.securityDetails()
    // console.log(loginresponseSecurityDetails)
    // const loginresponseDispose = await loginResponse.dispose()
    // console.log(loginresponseDispose)


    // stick with status, header & json
    const token = loginResponseJson.token
    console.log(token)
    return token
}

async createOrder(orderPayload){
    let response ={}
    response.token = await this.getToken()
    const orderResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
        {
            data: orderPayload,
            headers: {
                        'Authorization': response.token,
                        'Content-type': 'application/json'
            }
        })
        const orderResponseJson = await orderResponse.json()
        const orderId = await orderResponseJson.orders[0]
        console.log(orderId)
        response.orderId = orderId
        return response
}
}
module.exports={ApiUtils}