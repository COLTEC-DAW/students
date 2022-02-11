FROM node:17-slim

# Jekyll setup
RUN apt-get update && \
    apt-get install -y ruby-full build-essential zlib1g-dev && \
    gem install bundler

COPY ./Gemfile ./Gemfile
RUN bundle install
RUN bundle exec jekyll build