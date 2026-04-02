from __future__ import annotations

from flask import Flask, jsonify

from data_generator import generate_dashboard_data

# CHECK IF THIS IS BEING PICKED UP BY RISK-PREDICTOR HIGH RISK

def create_app() -> Flask:
    app = Flask(__name__)

    @app.get('/health')
    def health() -> tuple[dict[str, str], int]:
        return {"status": "ok"}, 200

    @app.get('/api/data')
    def api_data() -> tuple[object, int]:
        payload = generate_dashboard_data()
        return jsonify(payload), 200

    return app


app = create_app()


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
