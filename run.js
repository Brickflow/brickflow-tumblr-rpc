'use strict';

var metrics = require('brickflow-logger')({
  logstash: {
    port: 28777, 
    nodeName: 'brickflow_node',
    host: '172.30.1.144'
 },
 amqp: {
    host: '172.30.1.53',
    login: 'brickflow',
    password: 'password'
 }
});

var rpc = require('tumblr-rpc');
rpc.listen({
  url: 'amqp://brickflow:password@172.30.1.53',
  logger: metrics.createTracker('tumblrRpcListener')
});
