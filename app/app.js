const express = require('express');
const client = require('prom-client');
const app = express();
const os = require('os');

const VERSION = "v1";

// Prometheus metrics
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics();

const requestCounter = new client.Counter({
    name: 'app_requests_total',
    help: 'Total number of requests'
});

app.get('/', (req, res) => {
    requestCounter.inc();
    res.send("Cloud Deployment Running 🚀");
});

app.get('/health', (req, res) => {
    res.json({ status: "ok" });
});

app.get('/version', (req, res) => {
    res.json({ version: VERSION });
});

app.get('/load', (req, res) => {
    requestCounter.inc();
    const start = Date.now();
    while (Date.now() - start < 20000) {}
    res.send("CPU Load Triggered");
});

app.get('/metrics', async (req, res) => {
    res.set('Content-Type', client.register.contentType);
    res.end(await client.register.metrics());
});

app.listen(3000, () => {
    console.log("App running on port 3000");
});