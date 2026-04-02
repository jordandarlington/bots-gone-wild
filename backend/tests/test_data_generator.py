from data_generator import generate_dashboard_data


def test_generate_dashboard_data_shape() -> None:
    payload = generate_dashboard_data()

    assert "generated_at" in payload
    assert payload["summary"] == "Hackathon demo data payload"
    assert isinstance(payload["metrics"], list)
    assert len(payload["metrics"]) == 3

    for metric in payload["metrics"]:
        assert set(metric.keys()) == {"label", "value"}
