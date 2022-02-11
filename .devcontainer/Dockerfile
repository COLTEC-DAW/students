FROM node:17-slim

# Git setup
ENV GIT_DISCOVERY_ACROSS_FILESYSTEM=1
RUN apt-get update
RUN apt-get install -y git
    
# Jekyll setup
RUN apt-get install -y ruby-full build-essential zlib1g-dev && \
    gem install bundler

# Java setup for Selenium
# RUN apt-get install -y default-jdk
# RUN npm install -g Jest && \
#     npm install -g chromedriver