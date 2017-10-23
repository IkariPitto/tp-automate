export default async function setDefaultAuthInfo (page) {
    var defaultAuthority = {
        "openid": "2088012821737911",
        "signature": "7a47b1b0a1943f1b0720723dd11e7a6350b17f50",
        "timestamp": "1508753908434",
        "rid": "786011E1F2B7B0AB51415B305CF7D842",
        "certified": "true",
        "zhimaScore": "699",
        "isCanFree": "true",
        "cellphone": "18806212015"
    }
    
    await defaultAuthority.entries(([key, value]) => {
        page.setCookie({
            name: key,
            value,
            path: '/',
            expires: 3600 * 24
        })
    })
}