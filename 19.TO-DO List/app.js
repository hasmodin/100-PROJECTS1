const inp = document.querySelector('.task');
const btn = document.querySelector('.taskbtn');
let ol = document.querySelector('ol');
let h3 = document.querySelector('h3');


    btn.addEventListener('click', function() {
    
        let item = document.createElement('li');
        ol.append(item);
        item.innerText = inp.value;
        inp.value = "";
    
    
        let delBtn = document.createElement('button');
        item.append(delBtn)
        delBtn.innerText = "Delete";
        delBtn.classList.add('del');
    
    });


ol.addEventListener('click', function(event) {
        
    if(event.target.nodeName = "BUTTON") {
        let itemList = event.target.parentElement;
        itemList.remove();
    }
    
})



