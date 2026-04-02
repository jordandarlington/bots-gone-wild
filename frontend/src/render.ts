import type { DashboardPayload } from './types';

export function renderDashboard(container: HTMLElement, payload: DashboardPayload): void {
  const metricItems = payload.metrics
    .map((metric) => `<li><strong>${metric.label}:</strong> ${metric.value}</li>`)
    .join('');

  container.innerHTML = `
    <section>
      <h1>${payload.summary}</h1>
      <p>Generated at: ${payload.generated_at}</p>
      <ul>${metricItems}</ul>
    </section>
  `;
}
