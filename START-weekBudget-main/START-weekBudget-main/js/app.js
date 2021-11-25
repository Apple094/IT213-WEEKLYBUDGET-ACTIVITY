// Classes
class Budget {
    constructor(budget) {
        this.budget = Number ( budget );
        this.budgetLeft = this.budget;

    }
}

// everything related to html
class HTML{

    // insert the budget when the user submits
    insertBudget(amount){
        // insert into html
        budgetTotal.innerHTML = '${amount}';
        budgetLeft.innerHTML = '${amount}';
    }
}



// Variables
const addExpenseForm = document.querySelector('#add-expense'),
    budgetTotal = document.querySelector('span#total'),
    budgetLeft = document.querySelector('span#left');


    let budget, userBudget;

    // instantiate the html class
     const html = new HTML();


    // Event listener
    eventListeners();

    function eventListeners() {

        //app init
        document.addEventListener('DOMContentLoaded', function() {

            // ask the visitor the weekly budget
            userBudget = prompt('what your budget for this week?');

            // vaidate the user budget 
            if(userBudget === null || userBudget === '' || userBudget === '0'){
                window.location.reload();
            } else {
                // budget is valid then instatiate the budget class
                budget = new Budget(userBudget);
                
                console.log(budget);

                // intanciate the new html class
                html.insertBudget(budget.budget);
        }
    });

        // when a new expense is added
        addExpenseForm.addEventListener('submit', function(e) {
            // read the input values 
            const expenseName = document.querySelector('#expense').value;
            const amount = document.querySelector('#amount').value;
    });
} 