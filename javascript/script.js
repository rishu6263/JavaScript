const buttons=document.querySelectorAll('.button');
const body=document.querySelector('body')
buttons.forEach(function(button){
    button.addEventListener('click',function(e){
        let event=e.target.id;
        switch(event){
            case "white": body.style.backgroundColor=e.target.id;
            break;
            case "black": body.style.backgroundColor=e.target.id;
            break;
            case "pink": body.style.backgroundColor=e.target.id;
            break;
            case "purple": body.style.backgroundColor=e.target.id;
            break;
            case "green": body.style.backgroundColor=e.target.id;
            break;
            case "blue": body.style.backgroundColor=e.target.id;
            break;
        }
    });
});