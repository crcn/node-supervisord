var xmlrpc = require('xmlrpc'),
Url = require('url');

function api(host) {
  var hostParts = {};
        
  if(typeof host == 'string')
  {
      if (host.indexOf('unix') === 0) {

          hostParts.socketPath = Url.parse(host).pathname;
      }else{
          if (host.indexOf('http') !== 0) {
              host = 'http://' + host;
          }
          hostParts = Url.parse(host);
      
          if(hostParts.auth)
          {
              var authParts = hostParts.auth.split(':');
              hostParts.user = authParts[0];
              hostParts.pass = authParts[1];
          }
      }
  }
  else if(host)
  {
      hostParts = host;
  }
  
  
  if(!hostParts.hostname) hostParts.hostname = 'localhost';
  if(!hostParts.port) hostParts.port = 9001;
  
  if(hostParts.socketPath){
      this.client = xmlrpc.createClient({
          socketPath: hostParts.socketPath,
          path: '/RPC2',
      });
  }else{
      this.client = xmlrpc.createClient({
          host: hostParts.hostname,
          port: hostParts.port,
          path: '/RPC2',
          basic_auth: {
              user: hostParts.user,
              pass: hostParts.pass
          }
      });
  }
}

api.prototype._call = function(method, args, callback)
{
    this.client.methodCall(method, args, callback);
};

['supervisor.addProcessGroup',
  'supervisor.clearAllProcessLogs',
  'supervisor.clearLog',
  'supervisor.clearProcessLog',
  'supervisor.clearProcessLogs',
  'supervisor.getAPIVersion',
  'supervisor.getAllConfigInfo',
  'supervisor.getAllProcessInfo',
  'supervisor.getIdentification',
  'supervisor.getPID',
  'supervisor.getProcessInfo',
  'supervisor.getState',
  'supervisor.getSupervisorVersion',
  'supervisor.getVersion',
  'supervisor.readLog',
  'supervisor.readMainLog',
  'supervisor.readProcessLog',
  'supervisor.readProcessStderrLog',
  'supervisor.readProcessStdoutLog',
  'supervisor.reloadConfig',
  'supervisor.removeProcessGroup',
  'supervisor.restart',
  'supervisor.sendProcessStdin',
  'supervisor.sendRemoteCommEvent',
  'supervisor.signalProcess',
  'supervisor.signalProcessGroup',
  'supervisor.shutdown',
  'supervisor.startAllProcesses',
  'supervisor.startProcess',
  'supervisor.startProcessGroup',
  'supervisor.stopAllProcesses',
  'supervisor.stopProcess',
  'supervisor.stopProcessGroup',
  'supervisor.tailProcessLog',
  'supervisor.tailProcessStderrLog',
  'supervisor.tailProcessStdoutLog',
  'system.listMethods',
  'system.methodHelp',
  'system.methodSignature',
  'system.multicall'].forEach(function(property){
  api.prototype[property.split('.').pop()] = function(){
    var args = Array.prototype.slice.call(arguments);
    callback = args.pop();
    this._call(property, args, callback);
  };
});

module.exports = api;
