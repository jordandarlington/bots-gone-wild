import { renderDashboard } from '../src/render';
import type { DashboardPayload } from '../src/types';

describe('renderDashboard', () => {
  it('renders summary, timestamp, and metrics', () => {
    const container = document.createElement('div');

    const payload: DashboardPayload = {
      generated_at: '2026-01-01T00:00:00Z',
      summary: 'Hackathon demo data payload',
      metrics: [
        { label: 'Active Users', value: 128 },
        { label: 'New Signups', value: 23 }
      ]
    };

    renderDashboard(container, payload);

    expect(container.textContent).toContain('Hackathon demo data payload');
    expect(container.textContent).toContain('Generated at: 2026-01-01T00:00:00Z');
    expect(container.textContent).toContain('Active Users');
    expect(container.textContent).toContain('128');
  });
});
