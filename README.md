# Food Website Deployment

## Docker Build

```bash
docker build -t food-website:v1 .
```

## Run Docker

```bash
docker run -d -p 8080:80 food-website:v1
```

## Kubernetes Deployment

```bash
kubectl apply -f k8s/namespace.yaml
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
kubectl apply -f k8s/hpa.yaml
kubectl apply -f k8s/ingress.yaml
```

## Verify

```bash
kubectl get pods
kubectl get svc
kubectl get deployment
kubectl get hpa
```
