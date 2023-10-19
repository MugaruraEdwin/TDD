// If earnings < 12000 per year, pay no tax
// then with earnings between 12,000 and 36,000 pay 20% tax
// then with earnings greater than 36000 per year, pay 40% tax


class Tax{
    tax(earnings){
        if(earnings < 12000){
            var tax = 0;
            return tax;
        }
        else if(earnings >= 12000 && earnings <= 36000){
            var tax = earnings * 0.2;
            return tax;
        }
        else if(earnings > 36000){
            var tax = earnings * 0.4;
            return tax;
        }
    }
}

module.exports = Tax;