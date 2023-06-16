//--------------------------------- 110 | JavaScript Problem-1 Solution ---------------------------------

//--------------------------------- Question Area ------------------------------------
/*
Suppose, Ashfaq is a Bangladeshi citizen who has travelled to many countries.  These are India, Finland, Poland, Croatia and Canada. He used Singapore' transport while travelling to Poland from Finland. He made an endorsement of 100 Dollars in Bangladesh airport.

Now write a function which will show his endorsement in different countries' currencies. 
Also add an error case for negative numbers and string. 

N.B: You can endorse a maximum of 5000 Dollar from Bangladesh.

Currency of different Countries :
Bangladesh - BDT
India - Rupee
Finland - Euro
Singapore - Singapore Dollar
Poland - Zloty
Croatia - Euro
Canada - CAD

1 United States Dollar equals (Jun 15, 5:30 PM UTC · Disclaimer) -

108.32 - BDT
81.93 - Rupee
0.91 - Euro
1.34 - Singapore Dollar
4.07 - Polish Zloty
0.91 - Euro
1.32 - Canadian Dollar
*/
//------------------------------------------------------------------------------------

//--------------------------------- Function Area ------------------------------------

function currencyAccordingCountry (country,endorsementInUSD){
    if(typeof endorsementInUSD != 'number'){
        return 'NAN - Please Input a Number Value';
    }
    else{
        if(endorsementInUSD <= 0){
            return'Please Input a Positive Number Value';
        }
        else{
            if (country == 'Bangladesh'){
                result = (endorsementInUSD * 108.32) + ' ' + 'BDT';
            }
            else if (country == 'India'){
                result = (endorsementInUSD * 81.93) + ' ' + 'Indian Rupee';
            }
            else if ((country == 'Finland') || (country == 'Croatia')){
                result = (endorsementInUSD * 0.91) + ' ' + 'Euro';
            }
            else if (country == 'Singapore'){
                result = (endorsementInUSD * 1.34) + ' ' + 'Singapore Dollar';
            }
            else if (country == 'Poland'){
                result = (endorsementInUSD * 4.07) + ' ' + 'Polish Zloty';
            }
            else if (country == 'Canada'){
                result = (endorsementInUSD * 1.32) + ' ' + 'Canadian Dollar';
            }
            else{
                result = 'Ashfaq has not travelled to this country';
            }
            return result;
        }
    }
}

//------------------------------------------------------------------------------------
//-------------------______________-------------------
//-------------------              -------------------
//-------------------| INPUT AREA |-------------------
//-------------------______________-------------------

let country = 'Singapore';
let endorsementInUSD = 100;

//----------------------------------------------------

//--------------------------------- Output Area ------------------------------------
var currencyAccordingCountry = currencyAccordingCountry (country,endorsementInUSD);
console.log(currencyAccordingCountry);
//----------------------------------------------------------------------------------