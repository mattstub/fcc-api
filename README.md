# fcc-api
freeCodeCamp API Challenges

**VERSIONING**
- v0.1.0 - Fully Working API - *MDS - 6/2/2022*
- v0.1.1 - Routed API with Area for Future Microservices to be added - *MDS - 6/5/2022*
- v0.2.1 - API for Request Header Parser functioning locally and on Heroku, along with Timestamp Microservice - *MDS - 06/05/2022*

- **Timestamp Microservice:** [Heroku](https://fcc-ms-api.herokuapp.com/api/timestamp/landing) | [Instructions](https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/timestamp-microservice) | [Conditions](/documentation/01-timestamp.md)
- **Request Header Parser:** [Heroku](https://fcc-ms-api.herokuapp.com/api/whoami/landing) | [Instructions](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/request-header-parser-microservice) | [Conditions](/documentation/02-request-header-parser.md)
- **URL Shortener Microservice:** [Heroku]() | [Instructions](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/url-shortener-microservice) | [Conditions](/documentation/03-url-shortener.md)
- **Exercise Tracker:** [Heroku]() | [Instructions](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/exercise-tracker) | [Conditions](/documentation/04-exercise-tracker.md)
- **File Metadata Microservice:** [Heroku]() | [Instructions](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/file-metadata-microservice) | [Conditions](/documentation/05-file-metadata.md)

## Back End Certification of freeCodeCamp
Instead of building every project out as a separate entity, my goal is to write this with some better routing inside of one service. Documentation is provided for each separate microservice project, but since the routing is all separate I felt this to be a way to work on some RESTful routing in the process of writing all of these microservices. This may make for a larger headache in the end, but I wanted to keep my repositories cleaned up and work on some useful skills at the same time. 
*MDS - 06/03/2022*
#### Heroku Notes
```bash
heroku git:remote -a fcc-ms-api
git push heroku main
