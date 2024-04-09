let heading = document.querySelector('h1');
document.addEventListener('DOMContentLoaded', function(){
    heading.className = 'heading';
});

document.addEventListener('dblclick', function(){
    const now = new Date();
    window.alert(now);
});

let checkBox = document.getElementById('toggle');
let emailBox = document.getElementById('emailBox');
checkBox.addEventListener('change', function(){
    if(checkBox.checked){
        emailBox.className = '';
    }else{
        emailBox.className = 'hidden';
    }
});