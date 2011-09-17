(Supervisord)[http://supervisord.org/] library for node.js


(Supervisor Methods)[http://supervisord.org/api.html?highlight=api]:
--------

* is unimplemented
	
	- getSupervisorVersion()*
	- getIdentification()*
	- getState()*
	- getPID()*
	- readLog()*
	- clearLog()*
	- shutdown()*
	- restart()*
	
	- startProcess(name)
	- getAllProcessInfo(name)
	- startProcess(name)
	- startAllProcesses()
	- startProcessGroup()
	- stopProcessGroup()
	- sendProcessStdin()
	- sendRemoteCommEvent()*
	- addProcessGroup(name)
	- removeProcessGroup(name)
	- readProcessStdoutLog(name)
	- readProcessStderrLog(name, offset, length)
	- tailProcessStdoutLog(name, offset, length)
	- tailProcessStderrLog(name, offset, length)
	- clearProcessLogs(name)
	- clearAllProcesssLogs()


Example:
--------


```javascript

	var supervisord = require('supervisord');

	var upstart = supervisord.connect('http://localhost:9001');


	upstart.startProcess('my-app', function(err, result)
	{
		
	});
	

	upstart.getAllProcessInfo(function(err, result)
	{
		
	});

```