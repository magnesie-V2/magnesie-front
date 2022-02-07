import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

type ConsumptionChartProps = {
  detailedConsumption: number[];
};

const ConsumptionChart = ({ detailedConsumption }: ConsumptionChartProps) => (
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
          data: detailedConsumption,
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
