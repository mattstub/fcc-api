# freeCodeCamp API Timestamp Microservice

[Working API on Heroku](https://fcc-ms-time.herokuapp.com/)
*will need to adjust this link at a later date*

- v0.1.0 - Fully Working API - Completed on 6/2/2022
- v0.1.1 - Routed API with Area for Future Microservices to be added - Completed on 6/5/2022

### Timestamp Microservice Conditions

[Instructions For Project](https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/timestamp-microservice)
[Example Project](https://timestamp-microservice.freecodecamp.rocks/)

- [x] You should provide your own project, not the example URL.
- [x] A request to `/api/:date?` with a valid date should return a JSON object with a `unix` key
- [x] A request to `/api/:date?` with a valid date should return a JSON object with a `utc` key
- [x] Proper JSON object format is a `unix` key in milliseconds (type, number) and `utc` key formated (type, string)
- [x] A request to `/api/1451001600000` should return `{ unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" }`
- [x] Project can handle dates that can be successfully parsed by `new Date(date_string)`
- [x] If the input date string is invalid, the api returns an object having the structure `{ error : "Invalid Date" }`
- [x] An empty date parameter should return the current time in a JSON object with a `unix` key
- [x] An empty date parameter should return the current time in a JSON object with a `utc` key

#### Customization & Cleanup
- [x] Optimize code and remove testing console logs, deprecate file but keep copy for reference later
- [x] Document operations of code
