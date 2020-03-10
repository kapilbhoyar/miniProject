//const xlabels = [];
//const ylabels = [];
let ul = document.querySelector("ul");

async function chartIt(x, y) {
	const ctx = document.querySelector("#chart").getContext("2d");
	var myChart = new Chart(ctx, {
		type: "bar",
		data: {
			labels: x,
			datasets: [
				{
					label: "# of Votes",
					data: y,
					backgroundColor: "#cf82ff",
					borderColor: "#7300ba",
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
		const response = await fetch("./csvjson.json");
		const data = await response.json();
		// const table = data.split("\n").slice(1);
		data.forEach(row => {
			const cop = row.CostofProductionC2;
			const yield = row.Yield;
			if (row.Crop === cropName) {
				console.log("inside crop");
				xs.push(cop);
				ys.push(yield);
			}
		});
		chartIt(xs, ys);
	}
}

//console.log(rows);
// getData();
ul.addEventListener("click", getData);
