const calculatePoints = (initialArray) => {
    const allItemsList = initialArray


    //filter inappropriate dates and values:
    let today = new Date()
    let currentYear = today.getFullYear()
    let currentMonth = today.getMonth() + 1

    const allItemsWithProperDatesAndValues = allItemsList.filter((item) => ( 
        parseInt(item.date.split('/')[2]) === currentYear && parseInt(item.date.split('/')[1]) - currentMonth < 3 && parseInt(item.date.split('/')[1]) - currentMonth > -3       
    )).filter(value => value.value > 50)


    //calculate amount of points for each proper value:
    for(let i in allItemsWithProperDatesAndValues){
        allItemsWithProperDatesAndValues[i].points = 0
        if(allItemsWithProperDatesAndValues[i].value < 100){
            allItemsWithProperDatesAndValues[i].points = allItemsWithProperDatesAndValues[i].value - 50 
        } else if(allItemsWithProperDatesAndValues[i].value > 100){
            allItemsWithProperDatesAndValues[i].points = allItemsWithProperDatesAndValues[i].value - 50 + (allItemsWithProperDatesAndValues[i].value - 100)
        }
    }

    //sum the result for each unique user on the list
    const result = allItemsWithProperDatesAndValues.reduce((acc, {username, value}) => ({...acc, [username]: {username, value: acc[username] ? acc[username].value + value: value}}), {});

    

    return result
}

export default calculatePoints