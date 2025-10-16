// ===== Election Results Pie Chart =====
const ctx = document.getElementById("electionChart").getContext("2d");

const data = {
  labels: ["DAD Party", "PPP Party", "CCCC Party", "MCD Party"],
  datasets: [
    {
      data: [45, 5, 27, 23],
      backgroundColor: [
        "#1e88e5", // DAD
        "#fdd835", // PPP
        "#43a047", // CCCC
        "#e53935"  // MCD
      ],
      borderColor: "#fff",
      borderWidth: 2,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "bottom",
      labels: {
        color: "#333",
        font: { size: 14 },
      },
    },
    title: {
      display: true,
      text: "Election Vote Share (%)",
      font: { size: 18 },
      color: "#2c7a7b",
    },
  },
};

new Chart(ctx, {
  type: "pie",
  data: data,
  options: options,
});
