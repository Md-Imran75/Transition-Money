

document.getElementById("Login").addEventListener("click",function logindetails() {


         document.getElementById("container").style.display="none";
         document.getElementById("container2").style.display= "block";
         
    
})








const addDeposite = document.getElementById("Deposite-Money");

addDeposite.addEventListener("click", function addMoney() {

    const depositeMoney = getInputValue("InputMoney");
    trancition("deposite" , depositeMoney);
    trancition("totalBlance", depositeMoney);
    document.getElementById("InputMoney").value = "";

})

const withDrawGet = document.getElementById("Withdraw-Money");
withDrawGet.addEventListener("click", function WithdrawMoney() {
       const withDrawMoney = getInputValue("InputWithdraw");
       trancition("withdraw", withDrawMoney)
       trancition ("totalBlance", -1 * withDrawMoney)
       document.getElementById("InputWithdraw").value="";
      
})




function getInputValue(id) {
    const getInput = document.getElementById(id).value;
    const getInputNum = parseFloat(getInput);
    return getInputNum;
    
}

function trancition(id , getInputValue) {

    const totalDeposite = document.getElementById(id).innerText;
    const totalDepositeNum = parseFloat(totalDeposite);
    const total = totalDepositeNum + getInputValue;
    document.getElementById(id).innerText= total; 
    return total;
  
}   
     

    
