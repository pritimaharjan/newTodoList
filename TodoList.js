let btn=document.querySelector('button');
let inp=document.querySelector('input');
let ul=document.querySelector('ul');

btn.addEventListener('click',function(){
    let item =document.createElement('li');
    item.innerText=inp.value;
    let delBtn=document.createElement('button');
    delBtn.innerText='delete';
    item.appendChild(delBtn);
ul.appendChild(item);
    // console.log('clicked');
    delBtn.addEventListener("click",function(){
        let par = delBtn.parentElement;
        par.remove();
    });
    inp.value="";

});


   

