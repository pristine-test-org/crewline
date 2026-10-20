// Fills the plan card from the workspace's plan and points Renew at checkout.
(function () {
  var plan = window.PLANS[window.WORKSPACE.plan];
  var status = new URLSearchParams(location.search).get('status');
  var expired = plan.retired || status === 'expired';

  document.getElementById('plan-name').textContent = plan.name;
  document.getElementById('plan-members').textContent = window.WORKSPACE.members + ' of ' + plan.seats;
  document.getElementById('plan-state').textContent = expired ? 'Expired' : 'Active';
  document.getElementById('plan-notice').hidden = !expired;
  document.getElementById('renew').href = 'checkout.html?plan=' + window.WORKSPACE.plan;
})();
