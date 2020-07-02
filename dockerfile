FROM node:12 AS surf-api
WORKDIR /usr/src/surf-api
COPY ./ ./
RUN yarn config set unsafe-perm true && yarn
RUN npm install -g @angular/cli --unsafe-perm && ng config -g cli.packageManager yarn
CMD ["/bin/bash"]

FROM mongo AS mongo_db
ADD /mongodb/data/db/ /data/db/
ADD /mongodb/initdb.d/ /docker-entrypoint-initdb.d/
