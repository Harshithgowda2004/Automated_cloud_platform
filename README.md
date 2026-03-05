# Automated Cloud Deployment Platform (DevOps Project)

## Overview

This project demonstrates a **cloud-native DevOps deployment platform** that automates application deployment, scaling, monitoring, and CI workflows using modern DevOps tools.
The application is containerized with Docker, orchestrated using Kubernetes, automatically scaled using HPA, and monitored using Prometheus and Grafana.

The goal of this project is to simulate how production systems deploy and manage applications in modern cloud infrastructure.

---

## Architecture

Developer Push → GitHub → CI Pipeline → Docker Image → Kubernetes Cluster → Autoscaling → Monitoring

Components used:

* Docker (Containerization)
* Kubernetes (Container orchestration)
* Minikube (Local Kubernetes cluster)
* Prometheus (Metrics collection)
* Grafana (Monitoring dashboards)
* GitHub Actions (CI pipeline)
* Node.js + Express (Sample application)

---

## Features

* Containerized Node.js application using Docker
* Kubernetes Deployment with multiple replicas
* Horizontal Pod Autoscaling based on CPU utilization
* Self-healing pods (automatic restart on failure)
* Prometheus metrics collection
* Grafana dashboards for monitoring
* GitHub Actions CI pipeline for automated builds

---

## Application Endpoints

| Endpoint   | Purpose                                    |
| ---------- | ------------------------------------------ |
| `/`        | Basic application response                 |
| `/health`  | Health check used by Kubernetes            |
| `/version` | Displays application version               |
| `/load`    | Generates CPU load for testing autoscaling |
| `/metrics` | Exposes Prometheus metrics                 |

---

## How the System Works

1. Application is containerized using Docker.
2. Kubernetes deploys and manages multiple container instances (pods).
3. Kubernetes Service exposes the application.
4. Horizontal Pod Autoscaler monitors CPU usage.
5. When CPU usage increases, Kubernetes automatically creates more pods.
6. Prometheus collects application and cluster metrics.
7. Grafana visualizes metrics through dashboards.
8. GitHub Actions builds the project automatically on every code push.

---

## Project Structure

```
cloud-devops-project
│
├── app
│   ├── app.js
│   ├── package.json
│   └── Dockerfile
│
├── k8s
│   ├── deployment.yaml
│   ├── service.yaml
│   ├── hpa.yaml
│   └── servicemonitor.yaml
│
└── .github
    └── workflows
        └── deploy.yml
```

---

## Technologies Used

* Node.js
* Docker
* Kubernetes
* Minikube
* Prometheus
* Grafana
* GitHub Actions

---

## Future Improvements

* Deploy to AWS EKS for cloud infrastructure
* Add frontend interface (React dashboard)
* Implement canary deployments
* Add Terraform for infrastructure automation

---

## Author

Harshith R
