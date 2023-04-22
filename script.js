(function() {

    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
                let value = e.target.value;
                screen.value += value;
                console.log(screen.value);
        })
    });
    
    equal.addEventListener('click', function(e){
        if(screen.value!==""){
            
            let answer=eval(screen.value)
            screen.value=answer
        }
        else{
            screen.value=""
        }
        
        
    })

    clear.addEventListener('click',function () {
        screen.value = " ";
    })
})();
