[Supervisord](http://supervisord.org/) library for node.js


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
		console.log(result);

		/*
		[ { description: 'pid 22083, uptime 0:10:36',
	    pid: 22083,
	    stderr_logfile: '/tmp/test-stderr---supervisor-G27SFc.log',
	    stop: 1316236587,
	    logfile: '/tmp/test-stdout---supervisor-izrtu6.log',
	    exitstatus: 0,
	    spawnerr: '',
	    now: 1316237455,
	    group: 'app-1',
	    name: 'app-1',
	    statename: 'RUNNING',
	    start: 1316236819,
	    state: 20,
	    stdout_logfile: '/tmp/test-stdout---supervisor-izrtu6.log' },
	  { description: 'pid 22084, uptime 0:10:36',
	    pid: 22084,
	    stderr_logfile: '/tmp/test2-stderr---supervisor-SYjwvy.log',
	    stop: 1316236587,
	    logfile: '/tmp/test2-stdout---supervisor-MhlVtP.log',
	    exitstatus: 0,
	    spawnerr: '',
	    now: 1316237455,
	    group: 'chat-server',
	    name: 'chat-server',
	    statename: 'RUNNING',
	    start: 1316236819,
	    state: 20,
	    stdout_logfile: '/tmp/test2-stdout---supervisor-MhlVtP.log' } ]
    	*/
	});

```


### [Supervisor Methods](http://supervisord.org/api.html?highlight=api):

starred is unimplemented
	
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


