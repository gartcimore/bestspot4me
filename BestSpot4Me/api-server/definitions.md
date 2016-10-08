
```bash
GET /users/spot/favorite
```
	list all favorite spot of user

```bash
GET /spot{id}/
```
	get info for specific spot
```bash
POST /spot
```
	create a spot

```bash
POST /spot/{id}/comment
```
	post a comment about this spot
```bash
POST /spot/{id}/favorite
```
	set this spot as favorite for user ??

```bash
GET /spot/{id}/weather
```
	get weather for this spot
```bash
GET /spot/{id}/activity
```
	list all activity from this spot



# DB Model
spot definition :

--------------------------------------------------
| name| String        | 
--------------------------------------------------
| description| String|
--------------------------------------------------
| body| String              |
--------------------------------------------------
| activity| [{id: String, available: Boolean}]   |
--------------------------------------------------
| location| String              |
--------------------------------------------------
| meta| {
    	votes: Number,
    	favs:  Number
    	}              |
--------------------------------------------------

activity
--------------------------------------------------
| name| String        | 
--------------------------------------------------
| description| String|
--------------------------------------------------
| body| String              |
--------------------------------------------------
| requirements| [{id: String, mandatory: Boolean}   |
--------------------------------------------------
| type| [String]              |
--------------------------------------------------


Comment

--------------------------------------------------
| Spot| Number        | 
--------------------------------------------------
| user| String|
--------------------------------------------------
| body| String              |
--------------------------------------------------
| rating| Number   |
--------------------------------------------------

