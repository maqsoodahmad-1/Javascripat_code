function ask(question,yes,no) {
    if(confirm(question)) yes()
    else no();
}
function showOk() {
     document.write("You agreed with us.","<br>");
}

function showCancel() {
   document.write("You cancelled the execution","<br>"
   );
   }
ask("Do you agree?",showOk,showCancel);
