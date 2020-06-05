#!/bin/bash

# RUN THIS FILE AS AN EXECUTABLE FROM IT'S OWN DIRECTORY
# IT IS BENIGN TO RUN IT WHENEVER YOU WANT, BUT IS ONLY NEEDED THE FIRST TIME YOU DO A CLONE

git config core.hooksPath git-hooks

cd ..
npm install 


rm -fr target/dependency/*
mvn install dependency:copy-dependencies

