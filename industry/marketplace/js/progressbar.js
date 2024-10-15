// New Users Circular Progress
var visitorsBar = new ProgressBar.Circle("#progress-visitors", {
  color: "#4e73df",
  trailColor: "#f4f4f4",
  strokeWidth: 8,
  duration: 1400,
  easing: "easeInOut",
  text: {
    value: "0%",
  },
  from: { color: "#4e73df" },
  to: { color: "#1cc88a" },
  step: function (state, circle) {
    circle.path.setAttribute("stroke", state.color);
    var value = Math.round(circle.value() * 100);
    circle.setText(value + "%");
  },
});

visitorsBar.animate(0.75); // 75% New Users

// Growth Circular Progress
var growthBar = new ProgressBar.Circle("#progress-growth", {
  color: "#1cc88a",
  trailColor: "#f4f4f4",
  strokeWidth: 8,
  duration: 1400,
  easing: "easeInOut",
  text: {
    value: "0%",
  },
  from: { color: "#1cc88a" },
  to: { color: "#f6c23e" },
  step: function (state, circle) {
    circle.path.setAttribute("stroke", state.color);
    var value = Math.round(circle.value() * 100);
    circle.setText(value + "%");
  },
});

growthBar.animate(0.6); // 60% Growth

// Total Sales Circular Progress
var satisfactionBar = new ProgressBar.Circle("#progress-satisfaction", {
  color: "#f6c23e",
  trailColor: "#f4f4f4",
  strokeWidth: 8,
  duration: 1400,
  easing: "easeInOut",
  text: {
    value: "0%",
  },
  from: { color: "#f6c23e" },
  to: { color: "#e74a3b" },
  step: function (state, circle) {
    circle.path.setAttribute("stroke", state.color);
    var value = Math.round(circle.value() * 100);
    circle.setText(value + "%");
  },
});

satisfactionBar.animate(0.45); // 45% Total Sales

// Total Sales Circular Progress
var customerBar = new ProgressBar.Circle("#progress-customer", {
  color: "#f6c23e",
  trailColor: "#f4f4f4",
  strokeWidth: 8,
  duration: 1400,
  easing: "easeInOut",
  text: {
    value: "0%",
  },
  from: { color: "#f6c23e" },
  to: { color: "#e74a3b" },
  step: function (state, circle) {
    circle.path.setAttribute("stroke", state.color);
    var value = Math.round(circle.value() * 100);
    circle.setText(value + "%");
  },
});

customerBar.animate(0.35); // 85% Total Sales
