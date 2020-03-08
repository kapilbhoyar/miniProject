//const xlabels = [];
//const ylabels = [];

async function chartIt() {
	const data = await getData();
	console.log(data);
	const ctx = document.querySelector("#chart").getContext("2d");
	var myChart = new Chart(ctx, {
		type: "bar",
		data: {
			labels: data.xs,
			datasets: [
				{
					label: "# of Votes",
					data: data.ys,
					backgroundColor: "#fc97c8",
					borderColor: "#ed1a80",
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

chartIt();

//-----------------------------------------------------//

async function getData() {
	const xs = [];
	const ys = [];
	const response = await fetch("./csvjson.json");
	const data = await response.json();
	// const table = data.split("\n").slice(1);
	data.forEach(row => {
		const cop = row.CostofProductionC2;
		const yield = row.Yield;
		// if (row.Crop === "GRAM") {
		// 	console.log("inside crop");
			
    // }
    xs.push(cop);
		ys.push(yield);
	});
	return { xs, ys };
}
//console.log(rows);
// getData();
