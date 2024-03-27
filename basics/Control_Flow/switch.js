// Basic Switch Syntax:

// Switch(key){
//     case value:
//         break;

//         default:
//             break;
// }

let weekday="Sunday";

// break :helps to break control flow, if there is no break it will execute whole code except default one
switch(weekday) {

    case "Monday":
        console.log(`Its Monday today`) 
        break;

        case "Tuesday":
        console.log(`Its tuesday today`) 
        break;

        case "Wednesday":
        console.log(`Its wednesday today`) 
        break;

        case "Saturday":
        console.log(`Woooaah Weekend`) 
        break;

        case "Sunday":
        console.log(`Wooahhh, Weekenddd`) 
        break;

        default:
            console.log(`its no day`)
            break;


}