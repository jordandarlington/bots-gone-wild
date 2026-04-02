export type Metric = {
  label: string;
  value: number;
};

export type DashboardPayload = {
  generated_at: string;
  summary: string;
  metrics: Metric[];
};
