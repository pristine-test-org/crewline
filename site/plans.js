// Plans a workspace can be on. Prices are per member per month, in dollars.
// Team was retired: workspaces still on it move to Crew or Studio at renewal.
window.PLANS = {
  free:        { name: 'Free',          price: 0,  seats: 5 },
  crew:        { name: 'Crew',          price: 8,  seats: 25 },
  studio:      { name: 'Studio',        price: 14, seats: 100 },
  team_legacy: { name: 'Team (legacy)', retired: true, seats: 25 },
};

// The signed-in workspace. In the product this comes from the session.
window.WORKSPACE = { name: 'Northwind Studio', plan: 'team_legacy', members: 8 };
