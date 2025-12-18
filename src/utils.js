const getWeekday = () => {
    const date = new Date();

    switch (date.getDay()) {
        case 1:
            return "Monday";
        case 2: 
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5: 
            return "Friday";
        case 6:
            return "Saturday";
        default:
            return "Sunday";
    };
};

const getMonth = () => {
    const date = new Date();

    switch (date.getMonth()) {
        case 1:
            return "February";
        case 2:
            return "March";
        case 3:
            return "April";
        case 4:
            return "May";
        case 5: 
            return "June";
        case 6:
            return "July";
        case 7:
            return "August";
        case 8:
            return "September";
        case 9:
            return "October";
        case 10:
            return "November";
        case 11: 
            return "December";
        default:
            return "January";
    }
};

const getYear = () => {
    const date = new Date();
    return date.getFullYear();
};

const getDay = () => {
    const date = new Date();
    return date.getDate();
};

export { getWeekday, getMonth, getYear, getDay };