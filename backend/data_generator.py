from __future__ import annotations

from datetime import datetime, timezone


def generate_dashboard_data() -> dict[str, object]:
    """Generate simple demo payload for frontend consumption."""
    metrics = [
        {"label": "Active Users", "value": 128},
        {"label": "New Signups", "value": 23},
        {"label": "Conversion Rate", "value": 4.6},
    ]

    return {
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "summary": "Hackathon demo data payload",
        "metrics": metrics,
    }
