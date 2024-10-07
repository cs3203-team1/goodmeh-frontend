import { RadarChart } from "@mantine/charts";

type Props = {
  data: { criteria: string; score: number }[];
};

export const CriteriaBasedChart: React.FC<Props> = ({ data }) => {
  return (
    <RadarChart
      h={400}
      data={data}
      dataKey="criteria"
      withPolarRadiusAxis={false}
      series={[{ name: "score", color: "blue.4", opacity: 0.2 }]}
    />
  );
};
