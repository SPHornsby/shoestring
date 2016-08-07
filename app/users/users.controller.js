angular
    .module('app')
    .controller('UsersController', UsersController);
UsersController.$inject = ['usersService'];

function UsersController(dataservice) {
  var vm = this;
  vm.list = [];
  vm.addIncome = addIncome;
  vm.addExpense = addExpense;
  vm.name = 'Sean';
  vm.week = 25;
  vm.chartType = 'column';
  activate();

  function activate() {
    getBudget();
  }

  function addIncome() {
    var data = {input: vm.income, name: vm.name, week: vm.week, type: 'incomes'};
    return dataservice.addIncome(data)
      .then(function() {
        vm.income = {};
        getBudget();
      });
  }
  function addExpense() {
    var data = {input: vm.expense, name: vm.name, week: vm.week, type: 'expenses'};
    return dataservice.addExpense(data)
      .then(function() {
        vm.expense = {};
        getBudget();
      });
  }

  function createChart(budgets) {
    var formattedData = {
      incomes: budgets.totalIncomes/10,
      expenses: budgets.totalExpenses/10,
      total: (budgets.totalIncomes - budgets.totalExpenses)/10
    };
    
    Highcharts.chart('chart-container', {

      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: vm.chartType
      },
      title: {
        text: 'Expenses, Incomes, Total'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>${point.label}</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          },
          showInLegend: true
        }
      },
      series: [{
        name: vm.week,
        colorByPoint: true,
        data: [{
          name: 'Incomes',
          y: formattedData.incomes,
          label: formattedData.incomes.toFixed(2)
        }, {
          name: 'Expenses',
          y: formattedData.expenses,
          label: formattedData.expenses.toFixed(2)
        }, {
          name: 'Total',
          y: formattedData.total,
          label: formattedData.total.toFixed(2)
        }]
      }]
    });
  }

  function getBudget() {
    var week = vm.week;
    return dataservice.getBudget(week)
      .then(function(budgets) {
        vm.incomes = budgets.incomes;
        vm.expenses = budgets.expenses;
        vm.total = ((budgets.totalIncomes - budgets.totalExpenses) /10).toFixed(2);
        createChart(budgets);
      });
  }
}
