//github code link: 



/*--------------------------------------------------------------------
                 Kilometer to Meter Conversion
----------------------------------------------------------------------*/



function kilometerToMeter(valueInKilometer){
    var valueInMeter=valueInKilometer*1000;
       
        if(valueInMeter>0){
                return valueInMeter;
            }

            else if (valueInMeter==0){
                return "Distance is Zero";
            }

            else if(valueInMeter < 0){
                return "Distance Can not be Negative";
            }

            else{
                return "Please Enter Any Number to get the result in Meter unit";
            }
        
}

var valueInMeterUnit=kilometerToMeter(-78);
console.log(valueInMeterUnit);




/*--------------------------------------------------------------------
                   Budget Calculation
----------------------------------------------------------------------*/


function budgetCalculator (watch,mobile,laptop){
    
    if(watch>0 && mobile>0 && laptop>0){
        var totalBudget=watch*50+mobile*100+laptop*500;
        return totalBudget;
    }

    else if (watch==0 || mobile == 0 || laptop==0){
       return "One or Two or All Three Values are Zero ";  
    }
 
    else if (watch < 0 || mobile < 0 || laptop< 0){
        return "One or Two or All Three Values are Negative";  
     }

    else{
        return "Please Input 3 number to get the Total Cost";
    } 
}

var totalCost=budgetCalculator(1,2,3);
console.log(totalCost);






/*--------------------------------------------------------------------
                   Hotel Cost Calculation
----------------------------------------------------------------------*/


function hotelCost (duration){

            var cost= 0;
            if(duration>0 && duration <=10){
                cost= duration*100;
                return cost;
            }

            else if(duration>0 &&  duration<=20){
                var oneToTenDays=10*100;
                var remainingDays=duration-10;
                var elevenToTwentyDays=remainingDays*80;
                cost= oneToTenDays + elevenToTwentyDays;
                return cost;
            }

            else if(duration>0){
                var oneToTenDays=10*100;
                var elevenToTwentyDays=10*80
                var remainingDays=duration-20;
                var twentyOneToInfinityDays=remainingDays*50;
                cost= oneToTenDays+ elevenToTwentyDays + twentyOneToInfinityDays;
                return cost;
            } 

            else if (duration==0){
                return "Zero";
            }

            else if (duration<0){
                return "Time Duration Can not be Negative";
            }
            
            else{
                return "Please Input 1 number to get the Hotel Cost";
           } 
            
}

var hotelTotalCost = hotelCost(12);
console.log(hotelTotalCost);






/*--------------------------------------------------------------------
                   Mega Friend's Name Selection 
----------------------------------------------------------------------*/

function megaFriend(friendsName){

        var length = 0;
        var longestName;
        
        for (var i = 0; i < friendsName.length; i++) {
                if (friendsName[i].length > length) {
                    var length = friendsName[i].length;
                    longestName = friendsName[i];

                }
            }
    
    return longestName;
    
    }
    
    var friendsName=["Sakil Forazi","Shuvasis Das","Rathin Guho","Shakil Shariar","Ajgor Ahmed","Lokesh Das"];
    var longestNameSelection=megaFriend(friendsName);
    console.log(longestNameSelection);

