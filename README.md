# Custom Faceit REST API (TS)
This application is a TypeScript rebuild of [BonBonn Faceit Api](https://bonbonn-faceitapi.herokuapp.com/).
After full migration the TS version will completely replace the old one with identical endpoints.
This App was made to provide useful Endpoint for Twitch Bots without dealing with the authentication.

## Migration status
  
| Endpoints     | Method | Old Version        | New Version        |
|---------------|--------|--------------------|--------------------|
| /elo          | GET    | :white_check_mark: | :white_check_mark: |
| /checkelo     | GET    | :white_check_mark: | :white_check_mark: |
| /matchistory  | GET    | :white_check_mark: | :white_check_mark: |
| /currentmatch | GET    | :white_check_mark: | :x:                |
| /newwebhook   | POST   | :white_check_mark: | :x:                |


## Endpoint Parameter

| Paramter ->   | username | limit    | faceit_id |
|---------------|----------|----------|-----------|
| /elo          | required | :x:      | :x:       |
| /checkelo     | required | :x:      | :x:       |
| /matchhistory  | required | required | :x:       |
| /currentmatch | :x:      | :x:      | required  |

## Example request
#### /elo?username=BonBonn-_-
#### /checkelo?username=BonBonn-_-
#### /matchhistory?username=BonBonn-_-&limit=5
