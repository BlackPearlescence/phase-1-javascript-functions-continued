// code your solution here
function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`;
}
function mondayWork(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`;
}
function wrapAdjective(flair = "*"){
    const innerWrap = function(profession = "special"){
        return `You are ${flair}${profession}${flair}!`;
    }
    return innerWrap;
}