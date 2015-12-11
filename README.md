### What's this?

A node.js library for [supervisord](http://supervisord.org/). If you're not familiar with supervisord, it's much like [forever](https://github.com/indexzero/forever), [launchd](http://en.wikipedia.org/wiki/Launchd), upstart+monit, etc. 



### Requirements


- Node.js 
- Supervisord 
- NPM

### Installation

	npm install supervisord


### Example:


```javascript

	var supervisord = require('supervisord');

	var client = supervisord.connect('http://localhost:9001');


	client.startProcess('my-app', function(err, result)
	{
		
	});
	
	//return all running processes by supervisord
	client.getAllProcessInfo(function(err, result)
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
	    stdout_logfile: '/tmp/test-stdout---supervisor-izrtu6.log' } ]
    	*/
	});

```


### [Available Methods](http://supervisord.org/api.html?highlight=api):

- getSupervisorVersion()
- getIdentification()
- getState()
- getPID()
- readLog()
- clearLog()
- shutdown()
- restart()
- getAllProcessInfo(name)
- startProcess(name)
- startAllProcesses()
- startProcessGroup()
- stopProcessGroup()
- sendProcessStdin()
- sendRemoteCommEvent()
- addProcessGroup(name)
- removeProcessGroup(name)
- readProcessStdoutLog(name)
- readProcessStderrLog(name, offset, length)
- tailProcessStdoutLog(name, offset, length)
- tailProcessStderrLog(name, offset, length)
- clearProcessLogs(name)
- clearAllProcesssLogs()
- signalProcess(name, signal)
- signalProcessGroup(name, signal)


