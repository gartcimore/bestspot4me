
GET /users/spot/favorite
	list all favorite spot of user

GET /spot{id}/
	get info for specific spot
POST /spot
	create a spot

POST /spot/{id}/comment
	post a comment about this spot
POST /spot/{id}/favorite
	set this spot as favorite for user ??

GET /spot/{id}/weather
	get weather for this spot
GET /spot/{id}/activity
	list all activity from this spot



spot definition :

name:  String,
  description: String,
  body:   String,
  activity: [{id: String, available: Boolean}],

  location: String,
  meta: {
    votes: Number,
    favs:  Number
  }


activity

	name: String,
	description: String,
	requirements: [{id: String, mandatory: Boolean}]

Comment
spot: Number,
user: String,
  body:  String,
  rating: Number