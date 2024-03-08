function solve(meal_cost, tip_percent, tax_percent) {
    let total = 0;
    
    let tip = (meal_cost/100) * tip_percent;
    let tax = (tax_percent/100) * meal_cost;
    total += meal_cost + tip + tax;
    
    return Math.round(total)
  }