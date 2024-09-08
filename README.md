# NestJS-Job-Commander

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
4. run `nest start --watch -- cli event-refresh --provider=ticketmaster`

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

![Preview](https://github.com/henriqueweiand/nestjs-job-commander/blob/master/assets/overview.png)

### Possible updates

- K8S get both project and root envs;
