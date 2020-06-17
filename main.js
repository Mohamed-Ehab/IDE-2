// first problem//
function printFullName(firstName, LastName) {
    return `${firstName} ${LastName}`;
}



console.log(printFullName("Mohamed", "Ehab"));


//secand problem


function ageToToday(day, month, year) {

    const toDay = new Date()
    const oldDay = new Date(year, month, day)

    const diff = toDay - oldDay
    const dateInSecond = diff / 1000
    const dateInMin = dateInSecond / 60
    const dateInHour = dateInMin / 60
    const dateInDay = dateInHour / 24
    const dateInYear = toDay.getFullYear() - oldDay.getFullYear()

    console.log(dateInYear);
    console.log(dateInDay);
    console.log(dateInHour);
    console.log(dateInMin);
    console.log(dateInSecond);

}

ageToToday(15, 6, 1992);

// third problem
function capitalizationString(string) {

    capitalizationString("string");

    return
    string[0].toUpperCase() + string.slice(1);
}
console.log(capitalizationString("hello world !"));