//порядковый номер дня недели

let num = 3;
switch (num){
    case 1:
        console.log(num,"- понедельник");
        break;
    case 2:
        console.log(num,"- вторник");
        break;
    case 3:
        console.log(num,"- среда");
        break;
    case 4:
        console.log(num,"- четверг");
        break;
    case 5:
        console.log(num,"- пятница");
        break;
    case 6:
        console.log(num,"- суббота");
        break;
    case 7:
        console.log(num,"- воскресенье");
        break;
    default:
        console.log("");
        break;
}

//порядковый номер мастей
mast = 4;
switch (mast){
    case 1:
        console.log(mast,"- пики");
        break;
    case 2:
        console.log(mast,"- трефа");
        break;
    case 3:
        console.log(mast,"- бубен");
        break;
    case 4:
        console.log(mast,"- черви");
        break;
    default:
        console.log("");
        break
}

//порядковый номер карт, и полное название(масть достоинство)
mast = 4;
num = 14;
let MastText = "";
let NumText = "";
switch (mast){
    case 1:
        MastText ="пики";
        break;
    case 2:
        MastText ="трефа";
        break;
    case 3:
        MastText ="бубен";
        break;
    case 4:
        MastText ="черви";
        break;
    default:
        console.log("");
        break
}

switch (num){
    case 6:
        NumText ="шестерка";
        break;
    case 7:
        NumText ="семерка";
        break;
    case 8:
        NumText ="восьмерка";
        break;
    case 9:
        NumText ="девятка";
        break;
    case 10:
        NumText ="десятка";
        break;
    case 11:
        NumText ="валет";
        break;
    case 12:
        NumText ="дама";
        break;
    case 13:
        NumText ="король";
        break;
    case 14:
        NumText ="туз";
        break;        
    default:
        console.log("");
        break
}
console.log(mast,num,"-",NumText,MastText);
