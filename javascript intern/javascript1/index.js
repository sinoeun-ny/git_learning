/*const name='Knoeun'
name ='ddf'
console.log('My name is ='+name)
*/
/*let age1='18'
let age2 = 18
console.log(typeof age1)//if we use == it will compare the only 2 value
//if we use === it will compare the value with datatype*/
/*let btnSubmit = document.getElementById('btnSubmit');
btnSubmit.addEventListener('click',function(){
    alert('yo yo ya ya ')});*/



                            /*
                            let btnsubmit = document.getElementById("btnSubmit").addEventListener('click',function(){//click is the event that we use one click to make alert
                                                                                                                    //dblclick is the event that we click twice or double to make submit or alert
                            let name=document.getElementById("txtname").value;
                            alert('My name is' + name);
                            });*/



let btnsubmit = document.getElementById("btnSubmit").addEventListener('mouseover',function(){//click is the event that we use one click to make alert
let name=document.getElementById("txtname").value;
let lname=document.getElementById("txtnamel").value;
alert(`My name is ${name} ${lname}`);
});


// let btnsubmit = document.getElementById("btnSubmit").addEventListener('click',function(){//click is the event that we use one click to make alert
//     let name=document.getElementById("txtname").value;
// sum(name,5);
// });
// function sum(a , b){
//      alert(`result is ${arseInt(a) + b}`)}


                            