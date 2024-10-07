import { LineChart } from "@mantine/charts";

type Props = {
  data: { date: string; value: number }[];
};

export const TimeBasedChart: React.FC<Props> = ({ data }) => {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      series={[{ name: "value", color: "indigo.6" }]}
      curveType="monotone"
      tickLine="x"
      withPointLabels
      strokeDasharray="15 15"
    />
  );
};
