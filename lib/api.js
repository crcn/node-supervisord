var Structr = require('structr'),
xmlrpc = require('xmlrpc');



var __part = {

    /**
     */
     
     
    'override __construct': function(host)
    {
        this._super();
        
        if(!host) host = {};
        
        if(!host.host) host.host = 'localhost';
        if(!host.port) host.port = 9001;
        host.path = '/RPC2';
        
        this.client = xmlrpc.createClient(host);
    },
    
    
    /**
     */
     
    '_call': function(method, args, callback)
    {
        this.client.methodCall(method, args, callback);
    }
};



//yeah yeah, it'd certainly look cleaner if I wrote all these methods out, but I'm lazy.
[ 'supervisor.addProcessGroup',
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
  'system.multicall' ].forEach(function(property)
{
    
    //add onto the prototype
    __part[ property.split('.').pop() ] = function()
    {
        var args = Structr.argsToArray(arguments),
        callback = args.pop();
        
        this._call(property, args, callback);
    }
});


module.exports = Structr(__part); 

