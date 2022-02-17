import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

type ConsumptionChartProps = {
  timeValues: number[];
  consumptionValues: number[];
};

const ConsumptionChart = ({
  timeValues,
  consumptionValues,
}: ConsumptionChartProps) => (
  <HighchartsReact
    highcharts={Highcharts}
    options={{
      chart: {
        type: "column",
        zoomType: "x",
      },
      title: {
        text: "Consommation énergétique du processus de modélisation",
      },
      xAxis: {
        title: {
          text: "Temps (secondes)",
        },
        categories: timeValues.map((xValue) => `${xValue - 5} - ${xValue}`),
      },
      yAxis: {
        title: {
          text: "Consommation (joules)",
        },
      },
      series: [
        {
          name: "Consommation",
          data: consumptionValues,
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
