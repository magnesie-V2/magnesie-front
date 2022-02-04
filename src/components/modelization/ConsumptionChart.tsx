import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const data = [
  108, 135, 122, 128, 144, 133, 119, 104, 87, 61, 23, 10, 4.75, 4.25, 3.5, 3.45,
  3.53, 3.22, 3.66,
];
//https://api.highcharts.com/highcharts/plotOptions.line
const ConsumptionChart = () => (
  <HighchartsReact
    highcharts={Highcharts}
    options={{
      chart: {
        type: "line",
        zoomType: "x",
      },
      title: {
        text: "Consommation énergétique du processus de modélisation",
      },
      xAxis: {
        title: {
          text: "Temps (secondes)",
        },
      },
      yAxis: {
        title: {
          text: "Consommation (joules)",
        },
      },
      series: [
        {
          name: "Consommation",
          data: data,
          color: "#047857",
        },
      ],
      credits: {
        enabled: false,
      },
      legend: { enabled: false },
      tooltip: {
        valueSuffix: " joules",
      },
    }}
  />
);

export default ConsumptionChart;
