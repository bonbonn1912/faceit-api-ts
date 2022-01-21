# Custom Faceit REST API (TS) v 1.0.0
This application is a TypeScript rebuild of [BonBonn Faceit Api](https://bonbonn-faceitapi.herokuapp.com/).
After full migration the TS version will completely replace the old one with identical endpoints.
This App was made to provide useful Endpoint for Twitch Bots without dealing with the authentication.

## Migration status
  
| Endpoints     | Method | Old Version        | New Version        |
|---------------|--------|--------------------|--------------------|
| /elo          | GET    | :white_check_mark: | :white_check_mark: |
| /checkelo     | GET    | :white_check_mark: | :white_check_mark: |
| /matchistory  | GET    | :white_check_mark: | :white_check_mark: |
| /currentmatch | GET    | :white_check_mark: | :white_check_mark: |
| /newwebhook   | POST   | :white_check_mark: | :white_check_mark: |


## GET Endpoints

| Paramter ->   | username | limit    | faceit_id | key*      |
|---------------|----------|----------|-----------|-----------|
| /elo          | required | :x:      | :x:       |:x:       |
| /checkelo     | required | :x:      | :x:       |:x:       |
| /matchhistory | required | required| :x:        |:x:        |
| /getmatch | :x:      | :x:      | :x:      |required      |

*key = player_id from faceit v4 endpoint (/player)

## POST Endpoints

|    | header | value|
|---------------|----------|----------|
| /match          |  Authorization| player_id|




## Example request
#### /elo?username=BonBonn-_-
#### /checkelo?username=BonBonn-_-
#### /matchhistory?username=BonBonn-_-&limit=5
