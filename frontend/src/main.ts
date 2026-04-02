import { fetchDashboardData } from './api';
import { renderDashboard } from './render';

async function bootstrap(): Promise<void> {
  const container = document.getElementById('app');

  if (!container) {
    throw new Error('Missing #app root element');
  }

  try {
    const payload = await fetchDashboardData();
    renderDashboard(container, payload);
  } catch (error) {
    container.textContent = `Unable to load data: ${(error as Error).message}`;
  }
}

void bootstrap();
