// First Problem let's play mind game
function mindGame(number){
    if(typeof number!='number'){
        return 'Wrong input! Please Enter a Number';
    }
    else{
        const result = (((number*3)+10)/2)-5;
        return result;
    } 
}
// Summary: When we give paramiter(number)value then the function will run. If number is correct then the function run successfully and return the result. otherwise the function show a text message like that "Wrong input".


// Second Problem is Finding even or Odd
function evenOdd(string){
    if(typeof string!='string'){
        return 'Wrong input! Please Enter a String';
    }
    else{
        const stringLength = string.length;
        if(stringLength%2==0){
            return 'even';
        }
        else{
            return 'Odd';
        }
    }
}


// Summary: When we give paramiter(string)value then the function will run. If string is correct then the function run successfully and check string length return the result. otherwise if we give wrong input the function show a text message like that "Wrong input".


// Third Problem Is less or Greater than seven
function isLGSeven(number){
    if(typeof number!='number'){
        return 'Wrong input! Please Enter a Number';
    }
    else{
        let difference = number - 7;
        if(difference<7){
            return difference;
        }
        else{
            return number*2;
        }
    }
}


// Summary: When we give paramiter(number)value then the function will run. If number is correct then the function run successfully and calculate then return the result. otherwise if we give wrong input the function show a text message like that "Wrong input".




// 4th Problem Finding bad data
function findingBadData(arr){
    const result = Array.isArray(arr);
    if(result==false){
        return 'Wrong input! Please Enter a Array';
    }
    else{
        let i=0,badData=0;
        for(i=0;i<arr.length;i++){
            if(arr[i]<0){
                badData++;
            }
        }
        return badData;
    } 
}


// Summary: When we give paramiter(arr)value then the function will run. If arr is correct then the function run successfully run and check arr value one by one return the result. otherwise if we give wrong input the function show a text message like that "Wrong input".




// 5th Problem Convert your gems into diamond
function gemsToDiamond(n1,n2,n3){
    if(typeof n1!='number' || typeof n2!='number' || typeof n3!='number'){
        return 'Wrong input! Please Input Three Number';
    }
    else{
        let totalDiamond = (n1*21)+(n2*32)+(n3*43);
        if(totalDiamond>=2000){
            return totalDiamond-2000;
        }
        else{
            return totalDiamond;
        }
    }
}

// Summary: When we give paramiters(n1,n2,n3)value then the function will run. If parameter is correct then the function run successfully run and calculate with given number and return the result. otherwise if we give wrong input the function show a text message like that "Wrong input".
