function getMonthName(mo) {
  mo = mo -1 ;
 
 let months = ['jan', 'feb', 'march', 'april', 'may', 'june', 'july', 'august', 'sep', 'oct', ' nov' , 'dec'];
  
  if(months[mo]) {
    return months[mo];
  } else {
    throw 'InvalidMonthNo';
  }
 }

try {
  let monthName = getMonthName(myMonth);
  }

catch(e) {
  monthName = 'unknown';
  console.log(e);
 }

  
