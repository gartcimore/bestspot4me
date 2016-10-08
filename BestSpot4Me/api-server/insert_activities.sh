#!/bin/bash

curl -i -X POST \
   -H "Content-Type:application/json" \
   -d \
'{
  "name":"surf",
  "description": "glisse sur les vagues",
  "requirements":[],
  "type": ["wave", "sun"],
  "parameters": [
    {"level":1, "params":["wave:>22","Wind<20"]},
    {"level":2, "params":["wave:>35","Wind<25"]},
    {"level":2, "params":["wave:>45","Wind<25"]}
			]
}' \
 'http://localhost:8082/api/activity'

 curl -i -X POST \
   -H "Content-Type:application/json" \
   -d \
'{
  "name":"plongée",
  "description": "nage sous-marine",
  "requirements":[],
  "type": ["sea", "diving"],
  "parameters": [
    {"level":1, "params":["Temperature:>22","visibility>20"]},
    {"level":2, "params":["Temperature:>18","visibility>15"]},
    {"level":2, "params":["Temperature:>15","visibility>10"]}
      ]
}' \
 'http://localhost:8082/api/activity'


 curl -i -X POST \
   -H "Content-Type:application/json" \
   -d \
'{
  "name":"bronzette",
  "description": "faire le lézard",
  "requirements":[],
  "type": ["sun", "beach", "sand"],
  "parameters": [
    {"level":1, "params":["Temperature:>22","Wind<20"]},
    {"level":2, "params":["Temperature:>19","Wind<25"]},
    {"level":2, "params":["Temperature:>19","Wind<25"]}
      ]
}' \
 'http://localhost:8082/api/activity'



 curl -i -X POST \
   -H "Content-Type:application/json" \
   -d \
'{
  "name":"kite-surf",
  "description": "Cerf-volant et planche à voile",
  "requirements":[],
  "type": ["sea", "wind"],
  "parameters": [
    {"level":1, "params":["Wind<20"]},
    {"level":2, "params":["Wind<25"]},
    {"level":2, "params":["Wind<35"]}
      ]
}' \
 'http://localhost:8082/api/activity'


 curl -i -X POST \
   -H "Content-Type:application/json" \
   -d \
'{
  "name":"kayak",
  "description": "bateau cerceuil",
  "requirements":[],
  "type": ["sea", "stream"],
  "parameters": [
    {"level":1, "params":["Wind<20"]},
    {"level":2, "params":["Wind<25"]},
    {"level":2, "params":["Wind<25"]}
      ]
}' \
 'http://localhost:8082/api/activity'


 curl -i -X POST \
   -H "Content-Type:application/json" \
   -d \
'{
  "name":"randonée",
  "description": "marche à pieds",
  "requirements":[],
  "type": ["beach", "shore", "sun"],
  "parameters": [
    {"level":1, "params":["Temperature > 20","Wind<20"]},
    {"level":2, "params":["Temperature > 17","Wind<25"]},
    {"level":2, "params":["Temperature > 10","Wind<25"]}
      ]
}' \
 'http://localhost:8082/api/activity'


 curl -i -X POST \
   -H "Content-Type:application/json" \
   -d \
'{
  "name":"marche-côtière",
  "description": "marche dans l'eau",
  "requirements":[],
  "type": ["sea", "shore"],
  "parameters": [
    {"level":1, "params":["Temperature:>22"]},
    {"level":2, "params":["Temperature:>19"]},
    {"level":2, "params":["Temperature:>17"]}
      ]
}' \
 'http://localhost:8082/api/activity'

 curl -i -X POST \
   -H "Content-Type:application/json" \
   -d \
'{
  "name":"cerf-volant",
  "description": "c'est beau ça vole",
  "requirements":[],
  "type": ["wind", "beach"],
  "parameters": [
    {"level":1, "params":["Wind>20"]},
    {"level":2, "params":["Wind>25"]},
    {"level":2, "params":["Wind>35"]}
      ]
}' \
 'http://localhost:8082/api/activity'


 curl -i -X POST \
   -H "Content-Type:application/json" \
   -d \
'{
  "name":"pêche à pieds",
  "description": "ramsser des coquillages",
  "requirements":[],
  "type": ["sea", "shore"],
  "parameters": [
    {"level":1, "params":["Temperature:>22","marée>120"]},
    {"level":2, "params":["Temperature:>17","marée>105"]},
    {"level":2, "params":["Temperature:>10","marée>90"]}
      ]
}' \
 'http://localhost:8082/api/activity'

 curl -i -X POST \
   -H "Content-Type:application/json" \
   -d \
'{
  "name":"saut de falaises",
  "description": "sans parachutes",
  "requirements":[],
  "type": ["cliff", "sea"],
  "parameters": [
    {"level":1, "params":["Temperature:>22","Wind>5"]},
    {"level":2, "params":["Temperature:>19","Wind>15"]},
    {"level":2, "params":["Temperature:>17","Wind>25"]}
      ]
}' \
 'http://localhost:8082/api/activity'


 curl -i -X POST \
   -H "Content-Type:application/json" \
   -d \
'{
  "name":"Escalade",
  "description": "grimper sur des gros rochers",
  "requirements":[],
  "type": ["cliff", "sun"],
  "parameters": [
    {"level":1, "params":["Temperature:>22","Wind>10"]},
    {"level":2, "params":["Temperature:>19","Wind>25"]},
    {"level":2, "params":["Temperature:>17","Wind>45"]}
      ]
}' \
 'http://localhost:8082/api/activity'
