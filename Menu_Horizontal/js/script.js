var title = document.getElementById("title");
console.log(title);
console.log(title.firstChild);

var linkList = document.getElementsByTagName("a");
console.log(linkList);
// console.log(linkList[0]);
// console.log(linkList[0].firstChild);

var itemList = document.getElementsByClassName("item");
console.log(itemList);
// console.log(itemList[3]);
// console.log(itemList[3].firstChild);

var title2 = document.querySelector("#title");
console.log(title2.firstChild);

var item2 = document.querySelectorAll(".item");
console.log(item2);