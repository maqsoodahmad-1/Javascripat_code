let sayHi = function func(who) {
     if(who) {
        console.log(`Hi ${who}`);
        } else {
        func("gust");
      }
  };
sayHi();//Hi gust

//func(); This line gives the error function not defined(not visible outside of the function
