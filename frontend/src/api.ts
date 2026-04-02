import type { DashboardPayload } from './types';

export async function fetchDashboardData(endpoint = '/api/data'): Promise<DashboardPayload> {
  const response = await fetch(endpoint);

  if (!response.ok) {
    throw new Error(`Failed to fetch dashboard data: ${response.status}`);
  }

  return (await response.json()) as DashboardPayload;
}
