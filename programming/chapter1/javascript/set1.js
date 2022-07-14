let set = new Set(["Oranges","Bananas","apples","peers"]);
//iteration over set using for of loop
document.write("Iteration over the set using the for of loop");
for(let value of set) {
    document.write(value);
    document.write("<br>")
}
document.write("<br> <br> <br>")
document.write("iteration over the set using for eacn loop");
//iteration over set using for each loop
set.forEach((value,set ) => {
    document.write(value);
    document.write("<br>");
});

