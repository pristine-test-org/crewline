// Checkout for the plan in the URL. A plan with no price cannot be charged,
// so it goes back to Billing to show where the workspace stands.
(function () {
  var id = new URLSearchParams(location.search).get('plan');
  var plan = window.PLANS[id];

  if (!plan || typeof plan.price !== 'number') {
    document.getElementById('checkout-summary').textContent = 'Preparing checkout for ' + (plan ? plan.name : 'your plan') + '\u2026';
    setTimeout(function () { location.replace('billing.html?status=expired'); }, 1500);
    return;
  }

  var members = window.WORKSPACE.members;
  document.getElementById('checkout-summary').textContent = 'Review your plan for Northwind Studio.';
  document.getElementById('checkout-plan').textContent = plan.name;
  document.getElementById('checkout-total').textContent = members + ' members at $' + plan.price + ' a month: $' + members * plan.price + ' a month.';
  document.getElementById('checkout-form').hidden = false;
})();
