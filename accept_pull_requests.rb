#!/usr/bin/env ruby

require 'rubygems'
require 'octokit'
require 'pp'

TOKEN = ENV['TOKEN'] || raise("Please set TOKEN.")
ORG = 'advanced-js'
REPO = 'pr-demo'
# TODO create team per term?
TEAM = 'students'

Octokit.auto_paginate = true
client = Octokit::Client.new(access_token: TOKEN)


teams = client.organization_teams(ORG)
team = teams.find {|t| t.name.downcase == TEAM }
if team
  puts "@#{ORG}/#{TEAM} already exists."
else
  print "Creating @#{ORG}/#{TEAM} team..."
  team = client.create_team(ORG, name: TEAM)
  puts "done"
end


students = Set.new

prs = client.pull_requests("#{ORG}/#{REPO}", state: 'open')
prs.each do |pr|
  student = pr.user.login
  students << student

  # TODO figure out why not all are mergeable
  print "Merging #{pr.html_url}..."
  client.merge_pull_request("#{ORG}/#{REPO}", pr.number)
  puts "done"
end

students.each do |student|
  print "Adding @#{student}..."
  result = client.add_team_member(team.id, student)
  if result
    puts "done"
  else
    puts "FAIL"
  end
end
