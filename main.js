//const xlabels = [];
//const ylabels = [];
let ul = document.querySelector("ul");

async function chartIt(x, y, z, w, v) {
  const ctx1 = document.querySelector("#chart1").getContext("2d");
  var myChart1 = new Chart(ctx1, {
    type: "bar",
    data: {
      labels: y,
      datasets: [
        {
          label: "Cost Of Cultivation A2+FL VS Yield",
          data: x,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)"
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)"
          ],
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        xAxes: [
          {
            ticks: {
              // beginAtZero: true
            }
          }
        ]
      }
    }
  });

  const ctx2 = document.querySelector("#chart2").getContext("2d");
  var myChart2 = new Chart(ctx2, {
    type: "bar",
    data: {
      labels: y,
      datasets: [
        {
          label: "Cost Of Cultivation c2 VS Yield",
          data: z,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)"
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)"
          ],
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              // beginAtZero: true
            }
          }
        ]
      }
    }
  });
  const ctx3 = document.querySelector("#chart3").getContext("2d");
  var myChart3 = new Chart(ctx3, {
    type: "bar",
    data: {
      labels: y,
      datasets: [
        {
          label: "Cost Of Production C2 VS Yield",
          data: w,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)"
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)"
          ],
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              // beginAtZero: true
            }
          }
        ]
      }
    }
  });
  const ctx4 = document.querySelector("#chart4").getContext("2d");
  var myChart4 = new Chart(ctx4, {
    type: "bar",
    data: {
      labels: v,
      datasets: [
        {
          label: "State VS Yield",
          data: y,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)"
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)"
          ],
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              // beginAtZero: true
            }
          }
        ]
      }
    }
  });
  const ctx5 = document.querySelector("#chart5").getContext("2d");
  var myChart5 = new Chart(ctx5, {
    type: "pie",
    data: {
      labels: v,
      datasets: [
        {
          label: "State VS Yield",
          data: y,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)"
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)"
          ],
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              // beginAtZero: true
            }
          }
        ]
      }
    }
  });
}

//-----------------------------------------------------//

async function getData(event) {
  if (event.target.tagName == "SPAN") {
    var cropName = event.target.innerHTML;
    const xs = [];
    const ys = [];
    const zs = [];
    const ws = [];
    const vs = [];
    const response = await fetch("./csvjson.json");
    const data = await response.json();
    // const table = data.split("\n").slice(1);
    data.forEach(row => {
      const coc1 = row.CostofCultivationA2FL;
      const coc2 = row.CostofCultivationC2;
      const state = row.State;
      const cop = row.CostofProductionC2;
      const yield = row.Yield;
      if (row.Crop === cropName) {
        xs.push(coc1);
        ys.push(yield);
        zs.push(coc2);
        ws.push(cop);
        vs.push(state);
      }
    });
    chartIt(xs, ys, zs, ws, vs);
  }
}

//console.log(rows);
// getData();
ul.addEventListener("click", getData);
