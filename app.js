document.getElementById('submit').addEventListener('click', function(e){
    document.querySelector('.res').style.display = 'none';

    document.getElementById('load').style.display = 'unset';

    setTimeout(calculateResults, 3000);

    e.preventDefault();
});


function calculateResults(e){
    
    let Percentage = parseFloat(document.getElementById('percent').value) ;
    let GPA =parseFloat(document.getElementById('gpa').value) ;

    let result = (Percentage/100)*GPA ;
    let res = result.toFixed(2);

    document.getElementById('load').style.display = 'none';

    document.querySelector('.res').style.display = 'unset';

    document.getElementById('res').style.display = "unset";

    document.getElementById('res').innerHTML = res ;

    e.preventDefault();

}