import { fetchDashboardData } from '../src/api';

describe('fetchDashboardData', () => {
  it('returns parsed payload when request succeeds', async () => {
    const payload = {
      generated_at: '2026-01-01T00:00:00Z',
      summary: 'Hackathon demo data payload',
      metrics: [{ label: 'Active Users', value: 128 }]
    };

    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => payload
    } as Response);

    await expect(fetchDashboardData('/api/data')).resolves.toEqual(payload);
  });

  it('throws when request fails', async () => {
    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 500
    } as Response);

    await expect(fetchDashboardData('/api/data')).rejects.toThrow(
      'Failed to fetch dashboard data: 500'
    );
  });
});
