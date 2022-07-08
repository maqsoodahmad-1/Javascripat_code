"use strict"
function primefunction()
{
    let flag = 0
    let n = prompt("Enter the uper limit for showing the number",12);
    for(let j =2;j<n;j++)
    {
       for(let i = 2;i<j;i++)
      {
        if(j%i == 0)
        {
            // alert(`${i} is not a prime number`);
             flag += 1; 
            continue;
        }
        else
        {
           
             
        }
    
      }
      if(flag == 0)
      {
        alert(j);
      }
    }
}
