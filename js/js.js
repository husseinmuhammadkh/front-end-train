console.log('this is console')
name2='valve'
console.log(name2)
var username ="ali"
console.log(username)
username =10
console.log(username)
let phone="0123456789"
console.log(phone)
const name1 =("ali")
console.log(name1)
//انا حسين محمد خالد
var contactbutton =document.getElementById('contactbutton')
console.log(contactbutton)
function contactus(){
    alert('you are trying to contacat us')
    contactbutton.innerHTML="you contacted us"
    contactbutton.style.backgroundColor="red"
    contactbutton.style.width="300px"

}
var title1 =document.getElementById('newdiv')
title1.innerHTML = "this is from js"
title1.style.color="red"
title1.style.fontSize="50px"
var newclass = document.getElementsByClassName('h1class')
newclass[1].innerHTML="7"
var findp=document.getElementsByTagName('p')
var findh1=document.getElementsByTagName('h1')
console.log(findp)
findp[1].innerHTML="new"
for (let i=0;i<findp.length;i++){
    console.log(findp[i])
    if(i%2==0){
        findp[i].style.backgroundColor="green"
    }
    else{
        findp[i].style.backgroundColor="red"
    }
}

