# Custom Faceit REST API (TS) v 1.0.0
This application is a TypeScript rebuild of [BonBonn Faceit Api](https://bonbonn-faceitapi.herokuapp.com/).
After full migration ([Preview](https://bonbonn-faceitapi-ts.herokuapp.com/)) the TS version will completely replace the old one with identical endpoints. 
This App was made to provide useful Endpoint for Twitch Bots without dealing with the authentication.
## Setup
1. clone this repository and create ".env" file according to ".env.example"
2. execute -> npm run build & npm run start


## Migration status
  
| Endpoints     | Method | Old Version        | New Version        |
|---------------|--------|--------------------|--------------------|
| /elo          | GET    | :white_check_mark: | :white_check_mark: |
| /checkelo     | GET    | :white_check_mark: | :white_check_mark: |
| /matchistory  | GET    | :white_check_mark: | :white_check_mark: |
| /currentmatch* | GET    | :white_check_mark: | :white_check_mark: |
| /newwebhook*   | POST   | :white_check_mark: | :white_check_mark: |

*renamed


## GET Endpoints

| Parameter ->   | username | limit    | key*      |
|---------------|----------|----------|-----------|
| /elo          | required | :x:      | :x:       |
| /checkelo     | required | :x:      | :x:       |
| /matchhistory | required | required| :x:        |
| /getmatch | :x:      | :x:      | required      |

*key = player_id from faceit v4 endpoint (/player)

## POST Endpoints

|    | header | value|body|
|---------------|----------|----------|----------|
| /match          |  Authorization| player_id|Valid Faceit Events*|

*Its recommended to enable all Events to catch all cases of game abortion




## Example request
#### /elo?username=BonBonn-_-
#### /checkelo?username=BonBonn-_-
#### /matchhistory?username=BonBonn-_-&limit=5
