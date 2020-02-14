# Main-Media-Player


API Routes on Main-Media-Player

- GET `/api/0/song`
    - Legacy version of the API which returns all songs 

- GET `/song/:id`
    - GET a song with a particular ID
    - req.body: none
    - return: {
    _id: Int
	Name: String 
	Artist: String
	Posted: Date
	Tag: String
	Runtime: String
	AlbumName: String
	albumURL: String
	songURL: String
	Comments: [{
			_id = Int
			User: String
			Comment: string
			timeStamp: Date
			avatarPicURL: image
		       }...]
    }

- POST `/song`
    - POST a song to the database
    - req.body: {
	Name: String 
	Artist: String
	Posted: Date
	Tag: String
	Runtime: String
	AlbumName: String
	albumURL: String
	songURL: String
	Comments: [{
			_id = Int
			User: String
			Comment: string
			timeStamp: Date
			avatarPicURL: image
		       }...]
    }
    - return: {
        _id: Int
    }

- PUT `/song/:id`
    - UPDATE a song with a particular ID
    - req.body: {
    _id: Int
    any other combination of other params to update
    }
    - return: code for success or failure

- DELETE `/song/:id`
    - DELETE a song with a particular ID
    - req.body: {
        _id: Int
    }
    - return: code for success or failure