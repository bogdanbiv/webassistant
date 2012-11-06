db_format = {
	"logEntries": [{
		"id": "int",
		"start": "date",
		"end" : "date",
		"duration" : "timedelta",
		"type": "tomato",
		"subject": "Task Description",
		"project": "life_management",
		"future": "int",
	}, {
		"id": "int",
		"start": "date",
		"end" : "date",
		"duration" : "timedelta",
		"type": "meeting",
		"subject": "Task Description",
		"project": "life_management",
		"agenda": [],
		"future": "int",
	}],
	"futures": [{
		"id": "int",
		"name": "Task Description"
		"start": "date",
		"end": "date",
		"depends_on": [],
		"depended_by": [],
	}]
	"projects": [{
		"id": "int",
		"name": "life_management",
		"domain": "life",
		"parent": "int/-1",
	},],
	"domains":[{
		"name": "life",
		"priority": "1"
	}],
}
	