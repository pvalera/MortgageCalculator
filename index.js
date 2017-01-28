function clickCalculate() {
  // Calculate the monthly payment of the loan based on user inputs
  // of loan balance, interest rate, loan term and period selected

  var selectPeriod = document.getElementById("selectPeriod").value;
  var loanBalance = document.getElementById("loanBalance").value;
  var interestRate = document.getElementById("interestRate").value;
  var loanTerm = document.getElementById("loanTerm").value;

// reassign the selected period to the number of months
  if (selectPeriod === "Monthly") {
    period = 12;
  }
  else if (selectPeriod === "Bimonthly"){
    period = 6;
  }

  // monthly interest rate
  monthlyInterestRate = (interestRate / 100) / period;

  // number of payments
  numberOfPayments = loanTerm * period;

  // compounded interest rate
  compoundedInterestRate = Math.pow((1 + monthlyInterestRate), numberOfPayments);

  // interest quotient
  interestQuotient  = (monthlyInterestRate * compoundedInterestRate) / (compoundedInterestRate - 1);

  // final calculation
  monthlyPayment = (loanBalance * interestQuotient).toFixed(2);

  document.getElementById("results").innerHTML = "Monthly Payment: $" + monthlyPayment;
}
