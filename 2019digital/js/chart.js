window.onload = function () {

	var chart = new CanvasJS.Chart("chartContainer", {
		backgroundColor: "#232323",
		animationEnabled: true,
		theme: "light2",
		title: {
			text: ""
		},
		axisX: {
			valueFormatString: "MMM",
			lineColor: "#fff",
			tickColor: "#fff",
			labelFontColor: "#fff",
		},
		axisY: {
			lineColor: "#fff",
			tickColor: "#fff",
			labelFontColor: "#fff",
			valueFormatString: "#.0"
		},
		axisY2: {
			lineColor: "#fff",
			tickColor: "#fff",
			labelFontColor: "#fff",
			suffix: "%",
			valueFormatString: "#.0"
		},
		toolTip: {
			shared: true
		},
		legend: {
			fontColor: "#fff",
			fontFamily: "Microsoft JhengHei"
		},
		data: [
			{
				type: "column",
				name: "營業額(NTD,K,含稅)",
				showInLegend: true,
				color: "#ff640099",
				xValueFormatString: "MMMM YYYY",
				yValueFormatString: "$#,##0",
				dataPoints: [
					{ x: new Date(2016, 0), y: 4537.2 },
					{ x: new Date(2016, 1), y: 1098.5 },
					{ x: new Date(2016, 2), y: 1012.5 },
					{ x: new Date(2016, 3), y: 533.9 },
					{ x: new Date(2016, 4), y: 1690.4 },
					{ x: new Date(2016, 5), y: 6655.4 },
					{ x: new Date(2016, 6), y: 4436.4 },
					{ x: new Date(2016, 7), y: 3085.7 },
					{ x: new Date(2016, 8), y: 396.7 },
					{ x: new Date(2016, 9), y: 742.7 },
					{ x: new Date(2016, 10), y: 0 },
					{ x: new Date(2016, 11), y: 0 }
				]
			},
			{
				type: "line",
				name: "毛利率",
				color: "#00cc0099",
				axisYType: "secondary",
				showInLegend: true,
				yValueFormatString: "#0.0\"%\"",
				dataPoints: [
					{ x: new Date(2016, 0), y: 29.4 },
					{ x: new Date(2016, 1), y: 35.8 },
					{ x: new Date(2016, 2), y: 33.5 },
					{ x: new Date(2016, 3), y: 35.2 },
					{ x: new Date(2016, 4), y: 16.4 },
					{ x: new Date(2016, 5), y: 16.6 },
					{ x: new Date(2016, 6), y: 14.1 },
					{ x: new Date(2016, 7), y: 14.7 },
					{ x: new Date(2016, 8), y: 21.0 },
					{ x: new Date(2016, 9), y: 21.0 },
					{ x: new Date(2016, 10), y: false },
					{ x: new Date(2016, 11), y: false },
				]
			}]
	});
	chart.render();

	function addSymbols(e) {
		var suffixes = ["", "K", "M", "B"];
		var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);

		if (order > suffixes.length - 1)
			order = suffixes.length - 1;

		var suffix = suffixes[order];
		return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
	}

	function toggleDataSeries(e) {
		if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		} else {
			e.dataSeries.visible = true;
		}
		e.chart.render();
	}

}
