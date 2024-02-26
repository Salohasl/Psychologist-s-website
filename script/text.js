function showText(){
    const btn = document.querySelectorAll('.btn');
    const text1 = document.getElementById('btn-text1');
    const text2 = document.getElementById('btn-text2');
    const text3 = document.getElementById('btn-text3');
    btn.forEach(elem =>{
        elem.addEventListener('click', (event)=>{
            if(event.target.textContent == 'Образование'){
                text1.classList.toggle('active');
            }else if(event.target.textContent == 'Повышение квалификации'){
                text2.classList.toggle('active');
            }else if(event.target.textContent == 'Опыт работы'){
                text3.classList.toggle('active');
            }
        })
    })
}showText();