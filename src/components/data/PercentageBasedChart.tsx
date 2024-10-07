import { PieChart } from "@mantine/charts";
import { Box, Group, Stack, Text, Title } from "@mantine/core";

type Props = {
  data: { name: string; value: number; color: string }[];
  title: string;
};

export const PercentageBasedChart: React.FC<Props> = ({ data, title }) => {
  return (
    <Stack
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Title order={4}>{title}</Title>
      <PieChart
        data={data}
        tooltipDataSource="segment"
        withLabels
        withLabelsLine={false}
        labelsPosition="inside"
        labelsType="percent"
        strokeWidth={2}
        size={300}
      />
      <Group>
        {data.map((item) => (
          <Group key={item.name}>
            <Box h={10} w={10} bg={item.color} />
            <Text>{item.name}</Text>
          </Group>
        ))}
      </Group>
    </Stack>
  );
};
