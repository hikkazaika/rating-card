const page1 = document.querySelector('#firstRateP')
const page2 = document.querySelector('#secondRateP')
let rating = 0;

document.addEventListener('click', function(e) {
    if (!e.target.classList.contains('rate')) { return }
    let rate = (e.target);
    let allRate = document.querySelectorAll('.rate');
    allRate.forEach(function(item, i, arr) {
        allRate[i].classList.remove('rate-select');
    });
    rate.classList.add("rate-select");
    rating = rate.textContent;
    console.log(rating)
});

document.querySelector(".submit").onclick = function(){
    if (rating == 0)
    {
        alert("Оценку ставь сучка!")
    }
    else
    {
        page1.classList.add('hide-page');
        page2.classList.remove('hide-page');
        page2.querySelector('#rate').textContent = rating;
    }
    
  }
