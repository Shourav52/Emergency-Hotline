const heartIcon = document.getElementById('heart-count');
const coinIcon = document.getElementById('coin-count');
 const copyIcon = document.getElementById('copy-count');
const historyList = document.getElementById('history-list');
 const clearIcon = document.getElementById('clear-history');

 var heartCount =0;
 var coinCount =100;
 var copyCount=0;
const heartBtns = document.querySelectorAll('.img-icon .fa-heart');
for(const heartBtn of heartBtns){
    heartBtn.addEventListener('click', function (){
        heartCount++;
        heartIcon.textContent = heartCount ;

    });
}


const copyBtns = document.querySelectorAll('.copy-btn2');
for(const copyBtn of copyBtns){
    copyBtn.addEventListener('click', function(event){
        const card = event.target.closest('.cards-section');
        const number = card.querySelector('.call-nbr').textContent;
        navigator.clipboard.writeText(number).then(function (){
            alert('The number ' + number + ' is copied!');
            copyCount = copyCount + 1
            copyIcon.textContent= copyCount;
        });
    
    
    });
}

