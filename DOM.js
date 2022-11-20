// // // Examine the document object
// // console.dir(document);
// console.log(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title=123
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent='Hello';
// console.log(document.forms);//get full forms
// console.log(document.forms[0]);// get one form
// console.log(document.links);
// console.log(document.images);

// Get element by id
// console.log(document.getElementById('header-title'));
var headertitle=document.getElementById('header-title');
var header= document.getElementById('main-header');
// console.log(headertitle);
// headertitle.textContent='Hello';
// headertitle.innerText='good day';
// console.log(headertitle.textContent);//output-> Item Lister123
// console.log(headertitle.innerText);//Will display-Item Listergit branch -M main
// headertitle.innerHTML='<h3>Hello</h3>';


//------------ This will add border line to the main header-------------------------
header.style.borderBottom='solid 3px #000';

// ---------This will add border line to the item lister heading---------------
// headertitle.style.borderBottom='solid 3px #000'; 

// ul.firstElementChild.style.color = "green";

// // Get element by class
// var items=document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent=' Hello 2';
// items[1].style.fontWeight='Bold';
// // items[1].style.background='yellow';
// items[1].style.color = "green";

// // Make the 3 rd element in the list have green background color
// items[2].style.background='green';

// // Make all the elements in the list have bold color font
// for (var i=0;i<items.length;i++){
//  items[i].style.fontWeight='Bold';   
// }

// Get element by tag name
var li=document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent=' Hello 2';
li[1].style.fontWeight='Bold';
// items[1].style.background='yellow';
li[1].style.color = "green";

// Make the 3 rd element in the list have green background color
li[2].style.background='green';

// Make all the elements in the list have bold color font
for (var i=0;i<li.length;i++){
    li[i].style.fontWeight='Bold';   
}
