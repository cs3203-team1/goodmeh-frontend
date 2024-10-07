import { BarChart } from "@mantine/charts";

type Props = {
  data: { keyword: string; count: number }[];
};

export const CountBasedChart: React.FC<Props> = ({ data }) => {
  return (
    <BarChart
      h={300}
      data={data}
      series={[{ name: "count", color: "indigo.6" }]}
      dataKey="keyword"
      withBarValueLabel
      withTooltip={false}
      strokeDasharray="15 15"
    />
  );
};
