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
    console.log(budgets);
    Highcharts.chart('chart-container', {

      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Expenses, Incomes, Total'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
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
        name: 'Brands',
        colorByPoint: true,
        data: [{
          name: 'Incomes',
          y: budgets.totalIncomes
        }, {
          name: 'Expenses',
          y: budgets.totalExpenses,
          sliced: true,
          selected: true
        }, {
          name: 'Total',
          y: budgets.totalIncomes - budgets.totalExpenses
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
        vm.total = budgets.totalIncomes - budgets.totalExpenses;
        createChart(budgets);
      });
  }
}
