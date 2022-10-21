#!/bin/bash

docker run \
--rm \
-v $(pwd)/db/mysql_init:/docker-entrypoint-initdb.d \
-v $(pwd)/db/mysql_data:/var/lib/mysql \
--name mysql \
-e MYSQL_ROOT_PASSWORD=your_password \
--hostname my-mysql \
-e BIND-ADDRESS=0.0.0.0 \
-p 3306:3306 \
-itd mysql:8.0
