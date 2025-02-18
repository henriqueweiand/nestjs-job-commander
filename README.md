# NestJS-Job-Commander

Blog post: https://medium.com/nestjs-ninja/implementing-kubernetes-jobs-with-nestjs-and-nest-commander-a-practical-guide-ex-67c38b610d4f

An example of how to run a job process with NestJS-Commander inside a k8s job.

**_ Technologies applied _**

- NestJS
- Nest-commander
- TypeORM
- K8S
- Monorepo

### How to run

1. install packages
2. run docker with `docker-compose up -d`
3. create tables `yarn migration:run`
4. run `nest start --watch -- cli ticketmaster-event-refresh`

### Running inside k8s

1. Create the image `docker build -t ticketmaster-event-refresh-job .`
2. Create config map `kubectl create configmap env-config --from-env-file=.env`
3. After creating the config map, update the HOST and create a NODE_ENV with the following values:

```
CLI-ENRICHER.HOST=host.docker.internal
NODE_ENV=production
```

4. Inside k8s folder, run `kubectl apply -f cronjob.yaml`

### Application overview

[![NestJS Job Commander Demo](https://img.youtube.com/vi/GCfBnEMHVEE/0.jpg)](https://www.youtube.com/watch?v=GCfBnEMHVEE)

### Possible updates

- K8S get both project and root envs;
