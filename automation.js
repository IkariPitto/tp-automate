async function autoSearch (page) {
    var mainFrame = page.mainFrame()
    var $searchButton = await mainFrame.$('.fr-filter__position--loc')
    
    //await $searchButton.click()
    if ($searchButton) {
        await $searchButton.tap()
    }
    
    //console.log($searchButton)
}

module.exports = {
    autoSearch
}