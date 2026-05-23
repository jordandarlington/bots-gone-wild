from app import create_app


def test_health_endpoint() -> None:
    app = create_app()
    client = app.test_client()

    response = client.get('/health')

    assert response.status_code == 200
    assert response.get_json() == {"status": "ok"}

    # CHECK IF THIS IS BEING PICKED UP BY RISK-PREDICTOR


def test_api_data_endpoint() -> None:
    app = create_app()
    client = app.test_client()

    response = client.get('/api/data')
    body = response.get_json()

    assert response.status_code == 200
    assert isinstance(body, dict)
    assert body["summary"] == "Hackathon demo data payload"
    assert isinstance(body["metrics"], list)
    assert len(body["metrics"]) == 3
