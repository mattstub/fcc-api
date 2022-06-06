# fcc-api
freeCodeCamp API Challenges

**VERSIONING**
- v0.1.0 - *MDS - 06/02/2022* [^1]
- v0.1.1 - *MDS - 06/05/2022* [^2]
- v0.2.1 - *MDS - 06/05/2022* [^3]
- v0.2.2 - *MDS - 06/06/2022* [^4]
- v0.2.3 - *MDS - 06/06/2022* [^5]
- v0.3.1 - *MDS - 06/06/2022* [^6]
- v0.3.2 - *MDS - 06/06/2022* [^7]

[^1]: Timestamp Microservice fully functioning locally and remotely as an independent project on Heroku, 6/2/2022. Passing all freeCodeCamp conditions for Timestamp Microservice
[^2]: Moved Timestamp Microservice into a routed setup so that all APIs can be written in the same project. Working Locally and passing codes remotely.
[^3]: Request Header Parser Microservice functioning locally and remotely. Timestamp Microservice also still passing all conditions.
[^4]: Revised URL Shortener Microservice to asynchronous. Also added in ability to check and see if URL is already in system, and return its value if so instead of putting another iteration in the system causing the system to fail on subsequent attempts. All conditions are working locally again, and hopefully with asynchronous feature there will be enough of a catch to not crash the heroku app out. Also added a timeout feature to the database connection so that it would timeout after 5 seconds instead of default 30 seconds. Hoping this will also keep the app from crashing.
[^5]: Revised URL again to use the 'valid-url' package instead of a regex statement. Hopefully this will help us pass fcc conditions. In order for the valid-url package to finally work I had to use `isWebUri()` function instead of the original `isUri()` function that I initially saw in the documentation. Once this change was made all conditions were met.
[^6]: File Metadata Microservice working locally using the multer package and storing the file in local memory instead of to a database or file server of some kind. Pushing to Heroku to test remotely and insure conditions are being passed on freeCodeCamp.
[^7]: Changing up some of the routing from the original file, when testing through freeCodeCamp only conditions 1 & 2 pass or 3 pass, but never all three at the same time

### API Links
- **Timestamp Microservice:** [Heroku](https://fcc-ms-api.herokuapp.com/api/timestamp/landing) | [Instructions](https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/timestamp-microservice) | [Conditions](/documentation/01-timestamp.md)
- **Request Header Parser:** [Heroku](https://fcc-ms-api.herokuapp.com/api/whoami/landing) | [Instructions](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/request-header-parser-microservice) | [Conditions](/documentation/02-request-header-parser.md)
- **URL Shortener Microservice:** [Heroku](https://fcc-ms-api.herokuapp.com/api/shorturl/landing) | [Instructions](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/url-shortener-microservice) | [Conditions](/documentation/03-url-shortener.md)
- **Exercise Tracker:** [Heroku (not working)]() | [Instructions](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/exercise-tracker) | [Conditions](/documentation/04-exercise-tracker.md)
- **File Metadata Microservice:** [Heroku (not working)](https://fcc-ms-api.herokuapp.com/api/fileanalyse/landing) | [Instructions](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/file-metadata-microservice) | [Conditions](/documentation/05-file-metadata.md)

## Back End Certification of freeCodeCamp
Instead of building every project out as a separate entity, my goal is to write this with some better routing inside of one service. Documentation is provided for each separate microservice project, but since the routing is all separate I felt this to be a way to work on some routing in the process of writing all of these microservices. This may make for a larger headache in the end, but I wanted to keep my repositories cleaned up and work on some useful skills at the same time. 
*MDS - 06/03/2022*

Initially setting everything up in routes was extremely tedious, but only having to retrofit two microservices to fit this setup wasn't the worst thing in the world. With everything in place it makes for a much cleaner setup than just loading up the server file or having multiple directories. Also forced me to revisit previous express skills that I had forgotten about. Hopefully after this mornings commit I will only have two APIs left for this section of my certification. The URL shortener microservice was pretty in depth.
*MDS - 06/06/2022*

#### Heroku Notes
```bash
heroku git:remote -a fcc-ms-api
git push heroku main
```
