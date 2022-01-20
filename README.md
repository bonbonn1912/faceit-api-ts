# Custom Faceit REST API (TS)
This application is an Typescript rebuild of [BonBonn Faceit Api](https://bonbonn-faceitapi.herokuapp.com/)
After full migration the TS version will completely replace the old one with identical endpoints.
This App was made to provide useful Endpoint for Twitch Bots without dealing with the authentication.

## Migration status
  
| Endpoints     | Method | Old Version        | New Version        |
|---------------|--------|--------------------|--------------------|
| /Elo          | GET    | :white_check_mark: | :white_check_mark: |
| /Checkelo     | GET    | :white_check_mark: | :white_check_mark: |
| /matchistory  | GET    | :white_check_mark: | :white_check_mark: |
| /currentmatch | GET    | :x:                | :x:                |
| /newwebhook   | POST   | :x:                | :x:                |


## Endpoint Parameter

| Paramter ->   | username | limit    | faceit_id |
|---------------|----------|----------|-----------|
| /Elo          | required | :x:      | :x:       |
| /Checkelo     | required | :x:      | :x:       |
| /matchistory  | required | required | :x:       |
| /currentmatch | :x:      | :x:      | required  |

## Example request
#### /elo?username=BonBonn-_-
#### /checkelo?username=BonBonn-_-
#### /matchhistory?username=BonBonn-_-&limit=5
