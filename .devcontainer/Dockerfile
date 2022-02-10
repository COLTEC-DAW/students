FROM node:17-slim

ENV GIT_DISCOVERY_ACROSS_FILESYSTEM=1
RUN apt-get update
RUN apt-get install -y git && \
    apt-get install -y ruby-full build-essential zlib1g-dev
RUN gem install bundler