#!/bin/bash
mongoimport --db surf --collection boards --file /data/db/boards.json &&
mongoimport --db surf --collection posts --file /data/db/posts.json &&
mongoimport --db surf --collection teammembers --file /data/db/teammembers.json