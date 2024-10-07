import { Grid } from "@mantine/core";

import { CountBasedChart } from "@/components/data/CountBasedChart";
import { CriteriaBasedChart } from "@/components/data/CriteriaBasedChart";
import { PercentageBasedChart } from "@/components/data/PercentageBasedChart";
import { TimeBasedChart } from "@/components/data/TimeBasedChart";

const TIME_CHART_DATA = [
  {
    date: "Jan",
    value: 4.5,
  },
  {
    date: "Feb",
    value: 4.9,
  },
  {
    date: "Mar",
    value: 2,
  },
  {
    date: "Apr",
    value: 3.8,
  },
  {
    date: "May",
    value: 4.2,
  },
  {
    date: "Jun",
    value: 4.9,
  },
  {
    date: "Jul",
    value: 3.1,
  },
  {
    date: "Aug",
    value: 2.9,
  },
  {
    date: "Sep",
    value: 1.9,
  },
  {
    date: "Oct",
    value: 3.3,
  },
  {
    date: "Nov",
    value: 4.4,
  },
  {
    date: "Dec",
    value: 4.2,
  },
];

const PERCENTAGE_CHART_DATA = [
  { name: "Enthus", value: 300, color: "indigo.6" },
  { name: "Trollers", value: 300, color: "yellow.6" },
  { name: "Lurkers", value: 200, color: "teal.6" },
  { name: "Bots", value: 200, color: "gray.6" },
];

const CRITERIA_BASED_CHART_DATA = [
  { criteria: "Pricing", score: 7.8 },
  { criteria: "Confidence", score: 3.8 },
  { criteria: "Longevity", score: 8.8 },
  { criteria: "Location", score: 5.9 },
  { criteria: "Reputation", score: 9.9 },
];

const COUNT_BASED_CHART_DATA = [
  { keyword: "Cheap", count: 1200 },
  { keyword: "Good Service", count: 1900 },
  { keyword: "Fast Delivery", count: 400 },
  { keyword: "Friendly Staff", count: 1000 },
  { keyword: "Clean", count: 800 },
];

const DashboardPage: React.FC = () => {
  return (
    <Grid gutter={50} styles={{ inner: { maxWidth: "100%" } }}>
      <Grid.Col span={{ base: 12, xs: 12 }}>
        <TimeBasedChart data={TIME_CHART_DATA} />
      </Grid.Col>
      <Grid.Col span={{ base: 12, xs: 4 }}>
        <PercentageBasedChart
          data={PERCENTAGE_CHART_DATA}
          title="Types of users"
        />
      </Grid.Col>
      <Grid.Col span={{ base: 12, xs: 4 }}>
        <CriteriaBasedChart data={CRITERIA_BASED_CHART_DATA} />
      </Grid.Col>
      <Grid.Col span={{ base: 12, xs: 4 }}>
        <PercentageBasedChart
          data={PERCENTAGE_CHART_DATA}
          title="Types of users"
        />
      </Grid.Col>
      <Grid.Col span={{ base: 12, xs: 12 }}>
        <CountBasedChart data={COUNT_BASED_CHART_DATA} />
      </Grid.Col>
    </Grid>
  );
};

export const Component = DashboardPage;
Component.displayName = "DashboardPage";
