function getMonth(mo) {
  mo = mo -1 ;
 
 let month = ['jan', 'feb', 'march', 'april', 'may', 'june', 'july', 'august', 'sep', 'oct', ' nov' , 'dec'];
  
  if(months[mo]) {
    return months[mo];
  } else {
    throw 'InvalidMonthNo';
  }
 }

try {
   monthName = getMonthName(myMonth);
  }

catch(e) {
  monthName = 'unknown';
  logMyErrors(e);
 }
   
