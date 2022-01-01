// program 1
var div = document.getElementById("divProgram1");
var pTag = document.createElement("p");
div.appendChild(pTag)
pTag.style.color = " white"
function program1() {
    var fullDate = new Date()
    month = fullDate.getMonth() + 1
    var date = `"${month}/${fullDate.getDate()}/${fullDate.getFullYear()}"`
    console.log(date);
    pTag.innerHTML = `Current Date =>> ${date}`

}
// program 2
var div2 = document.getElementById("divProgram2");
var pTag2 = document.createElement("p");
div2.appendChild(pTag2)
pTag2.style.color = " white"
function program2() {
    var monthName = document.getElementById("selectMonth").value;
    console.log(monthName)
    var days;
    switch (monthName) {

        case "january":
            days = "31"
            pTag2.innerHTML = `Days =>> ${days}`
            break;
        case "febraury":
            days = "28 or 29"
            pTag2.innerHTML = `Days =>> ${days}`
            break;
        case "march":
            days = "31"
            pTag2.innerHTML = `Days =>> ${days}`
            break;
        case "april":
            days = "30"
            pTag2.innerHTML = `Days =>> ${days}`
            break;
        case "may":
            days = "31"
            pTag2.innerHTML = `Days =>> ${days}`
            break;
        case "june":
            days = "30"
            pTag2.innerHTML = `Days =>> ${days}`
            break;
        case "july":
            days = "31"
            pTag2.innerHTML = `Days =>> ${days}`
            break;
        case "august":
            days = "31"
            pTag2.innerHTML = `Days =>> ${days}`
            break;
        case "september":
            days = "30"
            pTag2.innerHTML = `Days =>> ${days}`
            break;
        case "october":
            days = "31"
            pTag2.innerHTML = `Days =>> ${days}`
            break;
        case "november":
            days = "30"
            pTag2.innerHTML = `Days =>> ${days}`
            break;
        case "december":
            days = "31"
            pTag2.innerHTML = `Days =>> ${days}`
            break;

        default:
            pTag2.style.color = "red"
            pTag2.innerHTML = `Please Select atleast one option`
            break;
    }
}
// program 3 
var div3 = document.getElementById("divProgram3");
var pTag3 = document.createElement("p");
div3.appendChild(pTag3)
pTag3.style.color = " white"
function program3() {
    try {
        var getDate = document.getElementById("program3").value;
        var months = ["January", "Febraury", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        var getMonth = new Date(getDate)
        getMonth = getMonth.getMonth()
        monthName = months[getMonth]
        console.log(monthName);
        if (monthName === undefined) {
            throw "Please Follow the Correct Format"
        }
        else {
            pTag3.innerHTML = `Month Name =>> ${monthName}`
        }
    }
    catch (err) {
        pTag3.style.color = "red"
        pTag3.innerHTML = err
    }
}
// program 4
var div4 = document.getElementById("divProgram4");
var pTag4 = document.createElement("p");
div4.appendChild(pTag4)
pTag4.style.color = " white"
function program4() {
    try {
        var minutes = document.getElementById("program4").value;
        minutes = parseInt(minutes)
        var date = new Date()
        date.setMinutes(minutes)
        if (date == "Invalid Date") {
            throw "Please Enter a Number"
        } else {
            console.log(date);
            pTag4.innerHTML = `${date}`
        }
    }
    catch (err) {
        pTag4.style.color = "red"
        pTag4.innerHTML = err
    }
}
//program 5
var div5 = document.getElementById("divProgram5");
var pTag5 = document.createElement("p");
div5.appendChild(pTag5)
pTag5.style.color = " white"
function program5() {
    try {
        var date = document.getElementById("program5").value;
        date = parseInt(date)
        var month = document.getElementById("program5a").value;
        month = parseInt(month)
        var year = document.getElementById("program5b").value;
        year = parseInt(year)
        var getDate = new Date()
        getDate.setDate(date)
        getDate.setMonth(month - 1)
        getDate.setFullYear(year)
        var day = getDate.getDay()
        console.log(day);
        if (isNaN(day) !== false) {
            throw "Please Follow the Correct Format / Invalid Values"
        }
        if (day == 0 || day == 6) {
            console.log("Happy Weekend");
            pTag5.innerHTML = `Happy Weekend!`
        }
        else {
            console.log("Not a Weekend");
            pTag5.innerHTML = `Not a Weekend`
        }
    }
    catch (err) {
        pTag5.style.color = "red"
        pTag5.innerHTML = err
    }
}
//program 6
var div6 = document.getElementById("divProgram6");
var pTag6 = document.createElement("p");
div6.appendChild(pTag6)
pTag6.style.color = " white"
function program6() {
    try {
        var date = document.getElementById("program6").value;
        date = parseInt(date)
        var month = document.getElementById("program6a").value;
        month = parseInt(month)
        var year = document.getElementById("program6b").value;
        year = parseInt(year)
        var months = ["January", "Febraury", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        var oldDate = new Date(`${date} ${months[month]},${year}`)
        var getDate = new Date(`${date} ${months[month]},${year}`)
        var getDay = getDate.getDay()
        var daySingle = days[getDay]
        console.log(getDate);
        getDate.setDate(date - 1)
        if (getDate == "Invalid Date") {
            throw "Please Follow the Correct Format / Invalid Values"
        } else {
            console.log(date);
            pTag6.innerHTML = `Input Day=>> ${oldDate} <br> Output =>> ${getDate} `
        }
    }
    catch (err) {
        pTag6.style.color = "red"
        pTag6.innerHTML = err
    }
}

//program 7 

var div7 = document.getElementById("divProgram7");
var pTag7 = document.createElement("p");
div7.appendChild(pTag7)
pTag7.style.color = " white"
function program7() {
    try {
        var getDate = document.getElementById("program7").value;
        getDate = parseInt(getDate)
        var getMonth = document.getElementById("program7a").value;
        var getYear = document.getElementById("program7b").value;
        getYear = parseInt(getYear)
        var add = document.getElementById("program7c").value;
        add = parseInt(add)
        var date = new Date(`${getDate} ${getMonth}, ${getYear}`)
        var months = date.getMonth()
        //console.log(months);
        var addMonths = months + add;
        date.setMonth(addMonths)
        if (date == "Invalid Date") {
            throw "Please Follow the Correct Format / Invalid Values"
        } else {
            pTag7.innerHTML = `Date After ${add} Months "${date}"`
        }
    }
    catch (err) {
        pTag7.style.color = "red"
        pTag7.innerHTML = err
    }
}

// program 8 
var div8 = document.getElementById("divProgram8");
var pTag8 = document.createElement("p");
div8.appendChild(pTag8)
pTag8.style.color = " white"
function program8() {
    try {
        var getDate = document.getElementById("program8").value;
        getDate = parseInt(getDate)
        var getMonth = document.getElementById("program8a").value;
        var getYear = document.getElementById("program8b").value;
        getYear = parseInt(getYear)
        var add = document.getElementById("program8c").value;
        add = parseInt(add)
        var date = new Date(`${getDate} ${getMonth}, ${getYear}`)
        var days = date.getDate()
        var weeks = days + add * 7
        date.setDate(weeks)
        //console.log(date);
        if (date == "Invalid Date") {
            throw "Please Follow the Correct Format / Invalid Values"
        } else {
            pTag8.innerHTML = `Date After ${add} Week "${date}"`
        }
    }
    catch (err) {
        pTag8.style.color = "red"
        pTag8.innerHTML = err
    }
}
// program 9 
var div9 = document.getElementById("divProgram9");
var pTag9 = document.createElement("p");
div9.appendChild(pTag9)
pTag9.style.color = " white"
function program9() {
    try {
        var getDate = document.getElementById("program9").value;
        getDate = parseInt(getDate)
        var getMonth = document.getElementById("program9a").value;
        var getYear = document.getElementById("program9b").value;
        getYear = parseInt(getYear)
        var add = document.getElementById("program9c").value;
        add = parseInt(add)
        var date = new Date(`${getDate} ${getMonth}, ${getYear}`)
        var year = date.getFullYear()
        var addYears = year + add
        date.setFullYear(addYears)
        console.log(date);

        if (date == "Invalid Date") {
            throw "Please Follow the Correct Format / Invalid Values"
        } else {
            pTag9.innerHTML = `Date After ${add} years "${date}"`
        }
    }
    catch (err) {
        pTag9.style.color = "red"
        pTag9.innerHTML = err
    }
}
//program 10
var div10 = document.getElementById("divProgram10");
var pTag10 = document.createElement("p");
div10.appendChild(pTag10)
pTag10.style.color = " white"
function program10() {
    try {
        var getDate = document.getElementById("program10").value;
        getDate = parseInt(getDate)
        var getMonth = document.getElementById("program10a").value;
        var getYear = document.getElementById("program10b").value;
        getYear = parseInt(getYear)
        var date = new Date(`${getDate} ${getMonth}, ${getYear}`)
        var offSet = date.getTimezoneOffset()
        var seconds = offSet * 60
        if (date == "Invalid Date") {
            throw "Please Follow the Correct Format / Invalid Values"
        } else {
            pTag10.innerHTML = `OffsetTimezone in Seconds=>> ${seconds}`
        }
    }
    catch (err) {
        pTag10.style.color = "red"
        pTag10.innerHTML = err
    }
}
//program  11
var div11 = document.getElementById("divProgram11");
var pTag11 = document.createElement("p");
div11.appendChild(pTag11)
pTag11.style.color = " white"
function program11() {
    try {
        var getDate = document.getElementById("program11").value;
        getDate = parseInt(getDate)
        var getMonth = document.getElementById("program11a").value;
        var getYear = document.getElementById("program11b").value;
        getYear = parseInt(getYear)
        var date = new Date(`${getDate} ${getMonth}, ${getYear}`)
        var year = date.getFullYear()
        if (date == "Invalid Date") {
            throw "Please Follow the Correct Format / Invalid Values"
        } else {
            pTag11.innerHTML = `Full Year=>> ${year}`
        }
    }
    catch (err) {
        pTag11.style.color = "red"
        pTag11.innerHTML = err
    }
}
//program 12
var div12 = document.getElementById("divProgram12");
var pTag12 = document.createElement("p");
div12.appendChild(pTag12)
pTag12.style.color = " white"
function program12() {
    try {
        var getDate = document.getElementById("program12").value;
        getDate = parseInt(getDate)
        var getMonth = document.getElementById("program12a").value;
        var getYear = document.getElementById("program12b").value;
        getYear = parseInt(getYear)
        var date = new Date(`${getDate} ${getMonth}, ${getYear}`)
        var year = date.getFullYear().toString()
        var digit2 = year.slice(2)
        if (date == "Invalid Date") {
            throw "Please Follow the Correct Format / Invalid Values"
        } else {
            pTag12.innerHTML = `Two digit representation of a Year=>> ${digit2}`
        }
    }
    catch (err) {
        pTag12.style.color = "red"
        pTag12.innerHTML = err
    }
}
//program 13
var div13 = document.getElementById("divProgram13");
var pTag13 = document.createElement("p");
div13.appendChild(pTag13)
pTag13.style.color = " white"
function program13() {
    try {
        var getDate = document.getElementById("program13").value;
        getDate = parseInt(getDate)
        var getMonth = document.getElementById("program13a").value;
        var getYear = document.getElementById("program13b").value;
        getYear = parseInt(getYear)
        var date = new Date(`${getDate} ${getMonth}, ${getYear}`)
        var month = date.getMonth()
        var monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        if (date == "Invalid Date") {
            throw "Please Follow the Correct Format / Invalid Values"
        } else {
            pTag13.innerHTML = `Short Representation of a Month=>> "${monthArray[month]}"`
        }
    }
    catch (err) {
        pTag13.style.color = "red"
        pTag13.innerHTML = err
    }
}
// program 14
var div14 = document.getElementById("divProgram14");
var pTag14 = document.createElement("p");
div14.appendChild(pTag14)
pTag14.style.color = " white"
function program14() {
    try {
        var getDate = document.getElementById("program14").value;
        getDate = parseInt(getDate)
        var getMonth = document.getElementById("program14a").value;
        var getYear = document.getElementById("program14b").value;
        getYear = parseInt(getYear)
        var date = new Date(`${getDate} ${getMonth}, ${getYear}`)
        var month = date.getMonth()
        var monthArray = ["January", "Febraury", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        if (date == "Invalid Date") {
            throw "Please Follow the Correct Format / Invalid Values"
        } else {
            pTag14.innerHTML = `Full Representation of a Month=>> "${monthArray[month]}"`
        }
    }
    catch (err) {
        pTag14.style.color = "red"
        pTag14.innerHTML = err
    }
}
// program 15
var div15 = document.getElementById("divProgram15");
var pTag15 = document.createElement("p");
div15.appendChild(pTag15)
pTag15.style.color = " white"
function program15() {
    try {
        var getDate = document.getElementById("program15").value;
        getDate = parseInt(getDate)
        var getMonth = document.getElementById("program15a").value;
        var getYear = document.getElementById("program15b").value;
        getYear = parseInt(getYear)
        var date = new Date(`${getDate} ${getMonth}, ${getYear}`)
        var month = date.getMonth() + 1
        if (month < 9) {
            var numericValues = "0" + month
        }
        else {
            var numericValues = month
        }
        if (date == "Invalid Date") {
            throw "Please Follow the Correct Format / Invalid Values"
        } else {
            pTag15.innerHTML = `Numeric Representation of a Month=>> ${numericValues}`
        }
    }
    catch (err) {
        pTag15.style.color = "red"
        pTag15.innerHTML = err
    }
}
// program 16
var div16 = document.getElementById("divProgram16");
var pTag16 = document.createElement("p");
div16.appendChild(pTag16)
pTag16.style.color = "white"
function program16() {
    try {
        var getDate = document.getElementById("program16").value;
        getDate = parseInt(getDate)
        var getMonth = document.getElementById("program16a").value;
        var getYear = document.getElementById("program16b").value;
        getYear = parseInt(getYear)
        var date = new Date(`${getDate} ${getMonth}, ${getYear}`)
        var year = date.getFullYear()
        var currentDate = new Date()
        var currentYear = currentDate.getFullYear()
        var age = currentYear - year
        if (date == "Invalid Date") {
            throw "Please Follow the Correct Format / Invalid Values"
        } else {
            pTag16.innerHTML = `Your Age is =>> ${age}`
        }
    }
    catch (err) {
        pTag16.style.color = "red"
        pTag16.innerHTML = err
    }
}
// program 17
var div17 = document.getElementById("divProgram17");
var pTag17 = document.createElement("p");
div17.appendChild(pTag17)
pTag17.style.color = " white"
function program17() {
    try {
        var getDate = document.getElementById("program17").value;
        getDate = parseInt(getDate)
        var getMonth = document.getElementById("program17a").value;
        var getYear = document.getElementById("program17b").value;
        getYear = parseInt(getYear)
        var date = new Date(`${getDate} ${getMonth}, ${getYear}`)
        var week = date.getDay()
        var dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        if (date == "Invalid Date") {
            throw "Please Follow the Correct Format / Invalid Values"
        } else {
            pTag17.innerHTML = `Full Representation of a Week Day =>> "${dayArray[week]}"`
        }
    }
    catch (err) {
        pTag17.style.color = "red"
        pTag17.innerHTML = err
    }
}
// program  18
var div18 = document.getElementById("divProgram18");
var pTag18 = document.createElement("p");
div18.appendChild(pTag18)
pTag18.style.color = " white"
function program18() {
    try {
        var getDate = document.getElementById("program18").value;
        getDate = parseInt(getDate)
        var getMonth = document.getElementById("program18a").value;
        var getYear = document.getElementById("program18b").value;
        getYear = parseInt(getYear)
        var date = new Date(`${getDate} ${getMonth}, ${getYear}`)
        var week = date.getDay()
        var dayArray = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]
        if (date == "Invalid Date") {
            throw "Please Follow the Correct Format / Invalid Values"
        } else {
            pTag18.innerHTML = `Representation of a Week Day =>> "${dayArray[week]}"`
        }
    }
    catch (err) {
        pTag18.style.color = "red"
        pTag18.innerHTML = err
    }
}
// program 19
var div19 = document.getElementById("divProgram19");
var pTag19 = document.createElement("p");
div19.appendChild(pTag19)
pTag19.style.color = " white"
function program19() {
    try {
        var date = new Date()
        var months = date.getMonth() + 1
        var dateOfMonth = date.getDate()
        var totalDays = months * 30
        var remainDays;
        var finalResult;
        if (months == 2) {
            remainDays = 28 - dateOfMonth
            finalResult = totalDays - remainDays
        } else if (months == 1 || months == 3 || months == 5 || months == 7 || months == 8 || months == 10 || months == 12) {
            remainDays = 31 - dateOfMonth
            finalResult = totalDays - remainDays
        }
        else {
            remainDays = 30 - dateOfMonth
            finalResult = totalDays - remainDays
        }
        if (date == "Invalid Date") {
            throw "Please Follow the Correct Format / Invalid Values"
        } else {
            pTag19.innerHTML = `Number of days passed =>> ${finalResult}`
        }
    }
    catch (err) {
        pTag19.style.color = "red"
        pTag19.innerHTML = err
    }
}
// program 20
var div20 = document.getElementById("divProgram20");
var pTag20 = document.createElement("p");
div20.appendChild(pTag20)
pTag20.style.color = " white"
function program20() {
    try {
        var numOfDays;
        var getYear = document.getElementById("program20").value;
        getYear = parseInt(getYear)
        if (getYear % 4 == 0 && getYear % 100 !== 0 || getYear % 400 == 0) {
            numOfDays = 366
        } else {
            numOfDays = 365
        }
        if (isNaN(getYear) !== false) {
            throw "Please Follow the Correct Format / Invalid Values"
        } else {
            pTag20.innerHTML = `Number of Days in ${getYear} =>> ${numOfDays} days`
        }
    }
    catch (err) {
        pTag20.style.color = "red"
        pTag20.innerHTML = err
    }

}
// program 21
var div21 = document.getElementById("divProgram21");
var pTag21 = document.createElement("p");
div21.appendChild(pTag21)
pTag21.style.color = " white"
function program21() {
    try {
        var getMonth = document.getElementById("program21a").value;
        var getYear = document.getElementById("program21").value;
        getYear = parseInt(getYear)
        var date = new Date(` ${getMonth}, ${getYear}`)
        var week = date.getDay()
        var dayArray = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]
        if (date == "Invalid Date") {
            throw "Please Follow the Correct Format / Invalid Values"
        } else {
            pTag21.innerHTML = `Representation of a Week Day =>> "${dayArray[week]}"`
        }
    }
    catch (err) {
        pTag21.style.color = "red"
        pTag21.innerHTML = err
    }
}
// program 22
var div22 = document.getElementById("divProgram22");
var pTag22 = document.createElement("p");
div22.appendChild(pTag22)
pTag22.style.color = " white"
function program22() {
    try {
        var getDate1 = document.getElementById("program22").value;
        getDate1 = parseInt(getDate1)
        var getMonth1 = document.getElementById("program22a").value;
        getMonth1 = parseInt(getMonth1)
        var getYear1 = document.getElementById("program22b").value;
        getYear1 = parseInt(getYear1)
        var getDate2 = document.getElementById("program22c").value;
        getDate2 = parseInt(getDate2)
        var getMonth2 = document.getElementById("program22d").value;
        getMonth2 = parseInt(getMonth2)
        var getYear2 = document.getElementById("program22e").value;
        getYear2 = parseInt(getYear2)
        var date1 = new Date(`${getMonth1 - 1}/${getDate1}/${getYear1}`)
        var date2 = new Date(`${getMonth2 - 1}/${getDate2}/${getYear2}`)
        if (date1 == "Invalid Date" || date2 == "Invalid Date") {
            throw "Please Follow the Correct Format / Invalid Values"
        } else {
            if (date1.getFullYear() < date2.getFullYear() || date1.getDate() < date2.getDate() || date1.getMonth() < date2.getMonth()) {
                console.log("date 2 is greater");
                pTag22.innerHTML = `Date 2 is Greater`
            } else if (date1.getFullYear() > date2.getFullYear() || date1.getDate() > date2.getDate() || date1.getMonth() > date2.getMonth()) {
                console.log("date 1 is greater");
                pTag22.innerHTML = `Date 1 is Greater`
            }
            else {
                console.log("both are equal");
                pTag22.innerHTML = `Both are Equal`
            }
        }
    }
    catch (err) {
        pTag22.style.color = "red"
        pTag22.innerHTML = err
    }
}
// program 23
var div23 = document.getElementById("divProgram23");
var pTag23 = document.createElement("p");
div23.appendChild(pTag23)
pTag23.style.color = " white"
function program23() {
    try {
        var getDate1 = document.getElementById("program23").value;
        getDate1 = parseInt(getDate1)
        var getMonth1 = document.getElementById("program23a").value;
        getMonth1 = parseInt(getMonth1)
        var getYear1 = document.getElementById("program23b").value;
        getYear1 = parseInt(getYear1)
        var getDate2 = document.getElementById("program23c").value;
        getDate2 = parseInt(getDate2)
        var getMonth2 = document.getElementById("program23d").value;
        getMonth2 = parseInt(getMonth2)
        var getYear2 = document.getElementById("program23e").value;
        getYear2 = parseInt(getYear2)
        var date1 = new Date(`${getMonth1 - 1}/${getDate1}/${getYear1}`)
        var date2 = new Date(`${getMonth2 - 1}/${getDate2}/${getYear2}`)
        if (date1 == "Invalid Date" || date2 == "Invalid Date") {
            throw "Please Follow the Correct Format / Invalid Values"
        } else {
            var monthsIntoDays = (date1.getMonth() + 1) * 30
            var totalDays = 365 - (date1.getDate() + monthsIntoDays)
            var monthsIntoDays2 = (date2.getMonth() + 1) * 30
            var totalDays2 = 365 - (date2.getDate() + monthsIntoDays2)
            console.log(totalDays);
            console.log(totalDays2);
            var difference = totalDays - totalDays2;
            console.log(difference);
            pTag23.innerHTML = `Difference b/w Dates in Days =>> ${difference} days`
        }
    }
    catch (err) {
        pTag23.style.color = "red"
        pTag23.innerHTML = err
    }
}
// program 24
var div24 = document.getElementById("divProgram24");
var pTag24 = document.createElement("p");
div24.appendChild(pTag24)
pTag24.style.color = " white"
function program24() {
    try {
        var getMonth1 = document.getElementById("program24a").value;
        getMonth1 = parseInt(getMonth1)
        var getYear1 = document.getElementById("program24b").value;
        getYear1 = parseInt(getYear1)
        var date = new Date(`${getYear1},${getMonth1}`)
        var lastDay;
        if (date == "Invalid Date") {
            throw "Please Follow the Correct Format / Invalid Values"
        } else {
            if (date.getMonth() == 1 && date.getFullYear() % 4 == 0 && date.getFullYear() % 100 !== 0 || date.getFullYear() % 400 == 0) {
                lastDay = 29
            }
            else if (date.getMonth() == 3 || date.getMonth() == 5 || date.getMonth() == 8 || date.getMonth() == 10) {
                lastDay = 30
            }
            else if (date.getMonth() == 0 || date.getMonth() == 2 || date.getMonth() == 4 || date.getMonth() == 6 || date.getMonth() == 7 || date.getMonth() == 9 || date.getMonth() == 11) {
                lastDay = 31
            }
            else {
                lastDay = 28
            }
            pTag24.innerHTML = `Last Day =>> ${lastDay}`
        }
    }
    catch (err) {
        pTag24.style.color = "red"
        pTag24.innerHTML = err
    }
}
// program 25
var div25 = document.getElementById("divProgram25");
var pTag25 = document.createElement("p");
div25.appendChild(pTag25)
pTag25.style.color = " white"
function program25() {
    try {
        var getDate1 = document.getElementById("program25").value;
        getDate1 = parseInt(getDate1)
        var getMonth1 = document.getElementById("program25a").value;
        getMonth1 = parseInt(getMonth1)
        var getYear1 = document.getElementById("program25b").value;
        getYear1 = parseInt(getYear1)
        var getDate2 = document.getElementById("program25c").value;
        getDate2 = parseInt(getDate2)
        var getMonth2 = document.getElementById("program25d").value;
        getMonth2 = parseInt(getMonth2)
        var getYear2 = document.getElementById("program25e").value;
        getYear2 = parseInt(getYear2)
        var date1 = new Date(`${getMonth1 - 1}/${getDate1}/${getYear1}`)
        var date2 = new Date(`${getMonth2 - 1}/${getDate2}/${getYear2}`)
        if (date1 == "Invalid Date" || date2 == "Invalid Date") {
            throw "Please Follow the Correct Format / Invalid Values"
        } else {
            if (date1.getTime() > date2.getTime()) {
                var dt = (date1.getTime() - date2.getTime()) / 1000
            } else {
                var dt = (date2.getTime() - date1.getTime()) / 1000
            }
            var dtInYears = dt / (60 * 60 * 24)
            dtInYears = Math.round(dtInYears / 365.25)
            pTag25.innerHTML = `Difference b/w Dates in Years =>> ${dtInYears} Years`
        }
    }
    catch (err) {
        pTag25.style.color = "red"
        pTag25.innerHTML = err
    }
}
// program 26 
var div26 = document.getElementById("divProgram26");
var pTag26 = document.createElement("p");
div26.appendChild(pTag26)
pTag26.style.color = " white"
function program26() {
    try {
        var getDate1 = document.getElementById("program26").value;
        getDate1 = parseInt(getDate1)
        var getMonth1 = document.getElementById("program26a").value;
        getMonth1 = parseInt(getMonth1)
        var getYear1 = document.getElementById("program26b").value;
        getYear1 = parseInt(getYear1)
        var getDate2 = document.getElementById("program26c").value;
        getDate2 = parseInt(getDate2)
        var getMonth2 = document.getElementById("program26d").value;
        getMonth2 = parseInt(getMonth2)
        var getYear2 = document.getElementById("program26e").value;
        getYear2 = parseInt(getYear2)
        var date1 = new Date(`${getMonth1 - 1}/${getDate1}/${getYear1}`)
        var date2 = new Date(`${getMonth2 - 1}/${getDate2}/${getYear2}`)
        if (date1 == "Invalid Date" || date2 == "Invalid Date") {
            throw "Please Follow the Correct Format / Invalid Values"
        } else {
            if (date1.getTime() > date2.getTime()) {
                var dt = (date1.getTime() - date2.getTime()) / 1000
            } else {
                var dt = (date2.getTime() - date1.getTime()) / 1000
            }
            var dtInMonths = dt / (60 * 60 * 24 * 7 * 4)
            dtInMonths = Math.round(dtInMonths)
            pTag26.innerHTML = `Difference b/w Dates in Months =>> ${dtInMonths} months`
        }
    }
    catch (err) {
        pTag26.style.color = "red"
        pTag26.innerHTML = err
    }
}
// program 27

var div27 = document.getElementById("divProgram27");
var pTag27 = document.createElement("p");
div27.appendChild(pTag27)
pTag27.style.color = " white"
function program27() {
    try {
        var getDate1 = document.getElementById("program27").value;
        getDate1 = parseInt(getDate1)
        var getMonth1 = document.getElementById("program27a").value;
        getMonth1 = parseInt(getMonth1)
        var getYear1 = document.getElementById("program27b").value;
        getYear1 = parseInt(getYear1)
        var getDate2 = document.getElementById("program27c").value;
        getDate2 = parseInt(getDate2)
        var getMonth2 = document.getElementById("program27d").value;
        getMonth2 = parseInt(getMonth2)
        var getYear2 = document.getElementById("program27e").value;
        getYear2 = parseInt(getYear2)
        var date1 = new Date(`${getMonth1}/${getDate1}/${getYear1}`)
        var date2 = new Date(`${getMonth2}/${getDate2}/${getYear2}`)
        if (date1 == "Invalid Date" || date2 == "Invalid Date") {
            throw "Please Follow the Correct Format / Invalid Values"
        } else {
            if (date1.getTime() > date2.getTime()) {
                var dt = (date1.getTime() - date2.getTime()) / 1000
            } else {
                var dt = (date2.getTime() - date1.getTime()) / 1000
            }
            var dtInWeeks = dt / (60 * 60 * 24 * 7)
            dtInWeeks = Math.round(dtInWeeks)
            pTag27.innerHTML = `Difference b/w Dates in Weeks =>> ${dtInWeeks} weeks`
        }
    }
    catch (err) {
        pTag27.style.color = "red"
        pTag27.innerHTML = err
    }
}
// program 28
var div28 = document.getElementById("divProgram28");
var pTag28 = document.createElement("p");
div28.appendChild(pTag28)
pTag28.style.color = " white"
function program28() {
    var date = new Date()
    var dayOfWeek = date.getDay()
    var currentDate = date.getDate()
    var days = ["sun", "mon", "tue", "wed", "thur", "fri", "sat"]
    if (dayOfWeek == 0) {
        date.setDate(currentDate - 0)
        pTag28.innerHTML = `Your Week Starts Today`
    }
    else if (dayOfWeek == 1) {
        date.setDate(currentDate - 1)
        pTag28.innerHTML = `Your Week Started on ${date.getDate()}  of this month  `
    }
    else if (dayOfWeek == 2) {
        date.setDate(currentDate - 2)
        pTag28.innerHTML = `Your Week Started on ${date.getDate()} of this month `
    }
    else if (dayOfWeek == 3) {
        date.setDate(currentDate - 3)
        pTag28.innerHTML = `Your Week Started on ${date.getDate()} of this month `
    }
    else if (dayOfWeek == 4) {
        date.setDate(currentDate - 4)
        pTag28.innerHTML = `Your Week Started on ${date.getDate()} of this month`
    }
    else if (dayOfWeek == 5) {
        date.setDate(currentDate - 5)
        pTag28.innerHTML = `Your Week Started on ${date.getDate()} of this month  `
    }
    else {
        date.setDate(currentDate - 5)
        pTag28.innerHTML = `Your Week Started on ${date.getDate()} of this month  `
    }
}
// program 5 (29)
var div29 = document.getElementById("divProgram29");
var pTag29 = document.createElement("p");
div29.appendChild(pTag29)
pTag29.style.color = " white"
function program29() {
    var date = new Date()
    var dayOfWeek = date.getDay()
    var currentDate = date.getDate()
    var days = ["sun", "mon", "tue", "wed", "thur", "fri", "sat"]
    if (dayOfWeek == 0) {
        date.setDate(currentDate + 6)
        pTag29.innerHTML = `Your Week Starts Today`
    }
    else if (dayOfWeek == 1) {
        date.setDate(currentDate + 5)
        pTag29.innerHTML = `Your Week Ends on ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    }
    else if (dayOfWeek == 2) {
        date.setDate(currentDate + 4)
        pTag29.innerHTML = `Your Week Ends on ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    }
    else if (dayOfWeek == 3) {
        date.setDate(currentDate + 3)
        pTag29.innerHTML = `Your Week Ends on ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    }
    else if (dayOfWeek == 4) {
        date.setDate(currentDate + 2)
        pTag29.innerHTML = `Your Week Ends on ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    }
    else if (dayOfWeek == 5) {
        date.setDate(currentDate + 1)
        pTag29.innerHTML = `Your Week Ends on ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    }
    else {
        date.setDate(currentDate + 0)
        pTag29.innerHTML = `Your Week Ends Today`
    }
}
// program 30
var div30 = document.getElementById("divProgram30");
var pTag30 = document.createElement("p");
div30.appendChild(pTag30)
pTag30.style.color = " white"
function program30() {
    var date = new Date()
    var month = date.getDate()
    date.setDate(1)
    pTag30.innerHTML = `${date}`
}
// program 31
var div31 = document.getElementById("divProgram31");
var pTag31 = document.createElement("p");
div31.appendChild(pTag31)
pTag31.style.color = " white"
function program31() {
    var date = new Date()
    var month = date.getDate()
    console.log(month);
    if (date.getMonth() == 0 || date.getMonth() == 2 || date.getMonth() == 4 || date.getMonth() == 6 || date.getMonth() == 7 || date.getMonth() == 9 || date.getMonth() == 11) {
        date.setDate(31)
    } else if (date.getMonth() == 3 || date.getMonth() == 5 || date.getMonth() == 8 || date.getMonth() == 10) {
        date.setDate(30)
    }
    else if (date.getMonth() == 1 && date.getFullYear() % 4 == 0 && date.getFullYear() % 100 !== 0 || date.getFullYear() % 400 == 0) {
    }
    else {
        date.setDate(28)
    }
    console.log(`${date}`);
    pTag31.innerHTML = `${date}`
}
// program 32
var div32 = document.getElementById("divProgram32");
var pTag32 = document.createElement("p");
div32.appendChild(pTag32)
pTag32.style.color = " white"
function program32() {
    try {
        var getDate1 = document.getElementById("program32").value;
        getDate1 = parseInt(getDate1)
        var getMonth1 = document.getElementById("program32a").value;
        getMonth1 = parseInt(getMonth1)
        var getYear1 = document.getElementById("program32b").value;
        getYear1 = parseInt(getYear1)
        var getDate2 = document.getElementById("program32c").value;
        getDate2 = parseInt(getDate2)
        var getMonth2 = document.getElementById("program32d").value;
        getMonth2 = parseInt(getMonth2)
        var getYear2 = document.getElementById("program32e").value;
        getYear2 = parseInt(getYear2)
        var date1 = new Date(`${getMonth1}/${getDate1}/${getYear1}`)
        var date2 = new Date(`${getMonth2}/${getDate2}/${getYear2}`)
        if (date1 == "Invalid Date" || date2 == "Invalid Date") {
            throw "Please Follow the Correct Format / Invalid Values"
        } else {
            if (date1.getTime() > date2.getTime()) {
                var dt = (date1.getTime() - date2.getTime()) / 1000
            } else {
                var dt = (date2.getTime() - date1.getTime()) / 1000
            }
            var dtInHours = dt / (60 * 60)
            dtInHours = Math.round(dtInHours)
            pTag32.innerHTML = `Difference b/w Dates in Hours =>> ${dtInHours} Hours`
        }
    }
    catch (err) {
        pTag32.style.color = "red"
        pTag32.innerHTML = err
    }
}
// program 33
var div33 = document.getElementById("divProgram33");
var pTag33 = document.createElement("p");
div33.appendChild(pTag33)
pTag33.style.color = " white"
function program33() {
    try {
        var getDate1 = document.getElementById("program33").value;
        getDate1 = parseInt(getDate1)
        var getMonth1 = document.getElementById("program33a").value;
        getMonth1 = parseInt(getMonth1)
        var getYear1 = document.getElementById("program33b").value;
        getYear1 = parseInt(getYear1)
        var getDate2 = document.getElementById("program33c").value;
        getDate2 = parseInt(getDate2)
        var getMonth2 = document.getElementById("program33d").value;
        getMonth2 = parseInt(getMonth2)
        var getYear2 = document.getElementById("program33e").value;
        getYear2 = parseInt(getYear2)
        var date1 = new Date(`${getMonth1}/${getDate1}/${getYear1}`)
        var date2 = new Date(`${getMonth2}/${getDate2}/${getYear2}`)
        if (date1 == "Invalid Date" || date2 == "Invalid Date") {
            throw "Please Follow the Correct Format / Invalid Values"
        } else {
            if (date1.getTime() > date2.getTime()) {
                var dt = (date1.getTime() - date2.getTime()) / 1000
            } else {
                var dt = (date2.getTime() - date1.getTime()) / 1000
            }
            var dtInMinutes = dt / (60)
            dtInMinutes = Math.round(dtInMinutes)
            pTag33.innerHTML = `Difference b/w Dates in Minutes =>> ${dtInMinutes} Minutes`
        }
    }
    catch (err) {
        pTag33.style.color = "red"
        pTag33.innerHTML = err
    }
}
// program 34
var div34 = document.getElementById("divProgram34");
var pTag34 = document.createElement("p");
div34.appendChild(pTag34)
pTag34.style.color = " white"
function program34() {
    var date = new Date().toString()
    console.log(date);
    var timeZone = date.slice(34)
    console.log(timeZone);
    pTag34.innerHTML = `Current Timezone =>> ${timeZone}`
}
// program 35
var div35 = document.getElementById("divProgram35");
var pTag35 = document.createElement("p");
div35.appendChild(pTag35)
pTag35.style.color = " white"
function program35() {
    var date = new Date()
    console.log(date);
    var hours = date.getHours()
    console.log(hours);
    var x;
    if (hours < 12) {
        x = `AM`
    }
    else {
        x = `PM`
    }
    console.log(`Current Time is in :${x}`);
    pTag35.innerHTML = `Current Time is in =>> ${x}`
}
// program 36
var div36 = document.getElementById("divProgram36");
var pTag36 = document.createElement("p");
div36.appendChild(pTag36)
pTag36.style.color = " white"
function program36() {
    var date = new Date()
    console.log(date);
    var hours = date.getHours()
    console.log(hours);
    var x;
    if (hours < 12) {
        x = `am`
    }
    else {
        x = `pm`
    }
    console.log(`Current Time is in :${x}`);
    pTag36.innerHTML = `Current Time is in =>>${x}`

}
// program 37
var div37 = document.getElementById("divProgram37");
var pTag37 = document.createElement("p");
div37.appendChild(pTag37)
pTag37.style.color = " white"
function program37() {
    var date = new Date()
    var hours = date.getHours() % 12
    if (hours < 10) {
        hours = `0` + hours
    }
    else {
        hours = `` + hours
    }
    console.log(`It's ${hours} O'Clock`);

    pTag37.innerHTML = `It's ${hours} O'Clock`
}
// program 38
var div38 = document.getElementById("divProgram38");
var pTag38 = document.createElement("p");
div38.appendChild(pTag38)
pTag38.style.color = " white"
function program38() {
    var date = new Date()
    var hours = date.getHours()
    console.log(hours);
    pTag38.innerHTML = `Hours in 24-hour Format =>> ${hours}`
}
// program 39
var div39 = document.getElementById("divProgram39");
var pTag39 = document.createElement("p");
div39.appendChild(pTag39)
pTag39.style.color = " white"
function program39() {
    var minutes = document.getElementById("program39").value
    minutes = parseInt(minutes)
    var date = new Date()
    date.setMinutes(minutes)
    var getminutes = date.getMinutes()
    if (getminutes < 10) {
        getminutes = `0` + getminutes
    }
    console.log(minutes);
    pTag39.innerHTML = `Minutes with leading zeros =>> ${getminutes}`
}