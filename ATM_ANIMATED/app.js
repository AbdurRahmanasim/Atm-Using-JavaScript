




let atm_amount = 30000 ;
let cardDailyList = 20000 ;
let balance = 40000 ;


function process(){
    let val = document.getElementById('val').value ;
    if(val.length < 4 ){
        document.getElementById("message").innerHTML = "Incorrect Pin" ;
    }
    if(val.length > 4 ){
        document.getElementById("message").innerHTML = "Incorrect Pin" ;
    }
    if(val.length < 4 ){
        document.getElementById("message").innerHTML = "Incorrect Pin" ;
    }
    if(val == "1010"){
        document.getElementById("message").innerHTML = "Correct Pin" ;

      window.location.assign('withdraw.html')




    }
    if(val != "1010" ){

        document.getElementById("message").innerHTML = "Incorrect Pin" ;
    }


}




function withdraw(){

    let amt = document.getElementById('cash').value ;

    if(amt > atm_amount){
        document.getElementById("abc").innerHTML = "Insufficient Money in ATM" ;
        return;
    }
    if(amt > cardDailyList){
        document.getElementById("abc").innerHTML = "Daily Withdraw limit exceeds" ;
        return;
    
    }
    if(amt > balance){
        document.getElementById("abc").innerHTML = "Insufficient Balance in Account" ;
        return;
    
    }
    if(amt%500 != 0){
        document.getElementById("abc").innerHTML = "Amount should be multiple of 500" ;
        return;
    
    }
    if(amt%500 == 0){
        document.getElementById("abc").innerHTML = "SuccessFully Withdrawn" ;
        atm_amount = atm_amount - amt ;
        cardDailyList = cardDailyList - amt ;
        balance = balance - amt ;

       

    }
    

}
