module.exports = function toReadable (number) {
   let num1 = number % 100,
         num2 = Math.floor(num1 / 10),
         num3 = Math.floor(number/100),
         strNum1,
         strNum2,
         strNum3,
         str;
   switch (num3) {
      case 1:
         strNum3='one hundred';
         break;
      case 2:
         strNum3='two hundred';
         break;
      case 3:
         strNum3='three hundred';
         break;
      case 4:
         strNum3='four hundred';
         break;
      case 5:
         strNum3='five hundred';
         break;
      case 6:
         strNum3='six hundred';
         break;
      case 7:
         strNum3='seven hundred';
         break;
      case 8:
         strNum3='eight hundred';
         break;
      case 9:
         strNum3='nine hundred';
         break;
      }
   if (number === 0) {
      return ('zero');
      }
   if ((num1 < 20)) {
      switch (num1) {
         case 1:
            strNum1='one';
            break;
         case 2:
            strNum1='two';
            break;
         case 3:
            strNum1='three';
            break;
         case 4:
            strNum1='four';
            break;
         case 5:
            strNum1='five';
            break;
         case 6:
            strNum1='six';
            break;
         case 7:
            strNum1='seven';
            break;
         case 8:
            strNum1='eight';
            break;
         case 9:
            strNum1='nine';
            break;
         case 10:
            strNum1='ten';
            break;
         case 11:
            strNum1='eleven';
            break;
         case 12:
            strNum1='twelve';
            break;
         case 13:
            strNum1='thirteen';
            break;
         case 14:
            strNum1='fourteen';
            break;
         case 15:
            strNum1='fifteen';
            break;
         case 16:
            strNum1='sixteen';
            break;
         case 17:
            strNum1 = 'seventeen';
            break;
         case 18:
            strNum1 = 'eighteen';
            break;
         case 19:
            strNum1 = 'nineteen';
            break;
      }
   } else{
      switch (num2){
            case 2:
               strNum2='twenty';
               break;
            case 3:
               strNum2='thirty';
               break;
            case 4:
               strNum2='forty';
               break;
            case 5:
               strNum2='fifty';
               break;
            case 6:
               strNum2='sixty';
               break;
            case 7:
               strNum2='seventy';
               break;
            case 8:
               strNum2='eighty';
               break;
            case 9:
               strNum2='ninety';
               break;
         }
      switch (num1%10) {
            case 1:
               strNum1 = 'one';
            break;
            case 2:
               strNum1 = 'two';
            break;
            case 3:
               strNum1 = 'three';
            break;
            case 4:
               strNum1 = 'four';
            break;
            case 5:
               strNum1 = 'five';
            break;
            case 6:
               strNum1 = 'six';
            break;
            case 7:
               strNum1 = 'seven';
            break;
            case 8:
               strNum1 = 'eight';
            break;
            case 9:
               strNum1 = 'nine';
            break;
         }
      }
   if (num1 == 0) {
      return (strNum3);
   } 
   if ((num1< 20)&&(num3==0)) {
      return(strNum1);
   }
   if ((num1 < 20) && (num3 > 0)) {
      return (strNum3+' '+ strNum1);
   }
   if ((num1 > 19) && (num3 > 0)&& (num2>0)&&(num1%10 !=0)) {
      return (strNum3 + ' ' + strNum2 + ' ' + strNum1)
   }
   if ((num1 > 19) && (num3 == 0) && (num2 > 0) && (num1 % 10 != 0)) {
      return (strNum2 + ' ' + strNum1)
   }
   if ((num1%10==0)&&(num3 > 0)) {
      return (strNum3 + ' ' + strNum2)
   }
   if ((num3 == 0) && (num1 % 10 == 0)) {
      return (strNum2)
   }

}
