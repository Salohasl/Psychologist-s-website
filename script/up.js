function upMap(){
    const map = document.querySelector('.map');
    map.classList.add('active');
}

function closeMap(){
    const map = document.querySelector('.map');
    map.classList.remove('active');
}

function showRight(){
    document.addEventListener('click', ()=>{
        window.location.href = '/help/home.html';
    })
}

function showLeft(){
    document.addEventListener('click', ()=>{
        window.location.href = '/training/news.html';
    })
}