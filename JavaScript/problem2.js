//--------------------------------- 110 | JavaScript Problem-2 Solution ---------------------------------

//--------------------------------- Question Area ------------------------------------
/*
Suppose, you are going on a trip with your batch mates. For the stay you need to reserve some rooms in a resort for two nights. The resort has different types of rates depending on the number of members your group has.

If your group has 1-50 members the rate will be 5000 BDT per night. 

If your group has  51-100 members the rate will be 4000 BDT per night.

And if your group has more than 100 members the rate will be 3000 BDT per night.

Now write a function which will calculate the total amount of money that will cost for the reservation.

N.B: Both Number of Members and Nights of staying will be variable not const.
*/
//------------------------------------------------------------------------------------

//--------------------------------- Function Area ------------------------------------

function totalCost (numberOfMembers,numberOfNights){
    if((typeof numberOfMembers != 'number') || (typeof numberOfNights != 'number')){
        return 'NAN - Please Input a Number Value';
    }
    else{
        if((numberOfMembers < 1) || (numberOfNights < 1)){
            return'Please Input a valid Number Value';
        }
        else{
            if ((numberOfMembers > 0) && (numberOfMembers <= 50)){
                cost = (numberOfMembers * 5000 * numberOfNights) + ' ' + 'BDT';
            }
            if ((numberOfMembers > 50) && (numberOfMembers <= 100)){
                cost = (numberOfMembers * 4000 * numberOfNights) + ' ' + 'BDT';
            }
            if ((numberOfMembers > 100) && (numberOfMembers <= 150)){
                cost = (numberOfMembers * 3000 * numberOfNights) + ' ' + 'BDT';
            }
            if (numberOfMembers > 150){
                return 'Maximum Number of members exceeded';
            }
            return cost;
        }
    }
}

//------------------------------------------------------------------------------------

//-------------------______________-------------------
//-------------------              -------------------
//-------------------| INPUT AREA |-------------------
//-------------------______________-------------------

let numberOfMembers = 40;
let numberOfNights = 2;

//----------------------------------------------------


//--------------------------------- Output Area ------------------------------------
var totalCost = totalCost(numberOfMembers,numberOfNights);
console.log(totalCost);
//----------------------------------------------------------------------------------

