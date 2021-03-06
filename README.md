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
- v0.4.1 - *MDS - 06/13/2022* [^8]
- v0.4.2 - *MDS - 06/14/2022* [^9]

[^1]: Timestamp Microservice fully functioning locally and remotely as an independent project on Heroku, 6/2/2022. Passing all freeCodeCamp conditions for Timestamp Microservice
[^2]: Moved Timestamp Microservice into a routed setup so that all APIs can be written in the same project. Working Locally and passing codes remotely.
[^3]: Request Header Parser Microservice functioning locally and remotely. Timestamp Microservice also still passing all conditions.
[^4]: Revised URL Shortener Microservice to asynchronous. Also added in ability to check and see if URL is already in system, and return its value if so instead of putting another iteration in the system causing the system to fail on subsequent attempts. All conditions are working locally again, and hopefully with asynchronous feature there will be enough of a catch to not crash the heroku app out. Also added a timeout feature to the database connection so that it would timeout after 5 seconds instead of default 30 seconds. Hoping this will also keep the app from crashing.
[^5]: Revised URL again to use the 'valid-url' package instead of a regex statement. Hopefully this will help us pass fcc conditions. In order for the valid-url package to finally work I had to use `isWebUri()` function instead of the original `isUri()` function that I initially saw in the documentation. Once this change was made all conditions were met.
[^6]: File Metadata Microservice working locally using the multer package and storing the file in local memory instead of to a database or file server of some kind. Pushing to Heroku to test remotely and insure conditions are being passed on freeCodeCamp.
[^7]: Changing up some of the routing from the original file, when testing through freeCodeCamp only conditions 1 & 2 pass or 3 pass, but never all three at the same time. Was still having issues so decided to just push code to a Repl project so it would pass freeCodeCamp conditions. Working properly on Heroku, but not passing a condition
[^8]: Code was working properly with replit, but was having issues getting everything squared away with the routing. Was having problems with database connections when pushed to heroku so started going back through the code locally and was having issues. Need to figure out what is happening
[^9]: Everything appears to be working properly now, able to create new users and push them up to the database. I believe my problem was because I wasn't exporting schema right and had two models in the same file, so split them into separate files and things began to work again. I need to read into standards about packaging up models in the same files or if they all need to be in their own separate file so they aren't causing problems like I was just running into. Going to push up to Heroku, hopefully it doesn't break again. Still have some design work to do for the complete package, and need to add a form for exercise logs before v1.0.0 is considered complete.

### API Links
- **Timestamp Microservice:** [Heroku](https://fcc-ms-api.herokuapp.com/api/timestamp/landing) | [Instructions](https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/timestamp-microservice) | [Conditions](/documentation/01-timestamp.md)
- **Request Header Parser:** [Heroku](https://fcc-ms-api.herokuapp.com/api/whoami/landing) | [Instructions](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/request-header-parser-microservice) | [Conditions](/documentation/02-request-header-parser.md)
- **URL Shortener Microservice:** [Heroku](https://fcc-ms-api.herokuapp.com/api/shorturl/landing) | [Instructions](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/url-shortener-microservice) | [Conditions](/documentation/03-url-shortener.md)
- **Exercise Tracker:** [Heroku](https://fcc-ms-api.herokuapp.com/api/users/landing) | [Instructions](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/exercise-tracker) | [Conditions](/documentation/04-exercise-tracker.md)
- **File Metadata Microservice:** [Heroku](https://fcc-ms-api.herokuapp.com/api/fileanalyse/landing) | [Repl](https://boilerplate-project-filemetadata.mattstub.repl.co/) | [Instructions](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/file-metadata-microservice) | [Conditions](/documentation/05-file-metadata.md)

## Back End Certification of freeCodeCamp
Instead of building every project out as a separate entity, my goal is to write this with some better routing inside of one service. Documentation is provided for each separate microservice project, but since the routing is all separate I felt this to be a way to work on some routing in the process of writing all of these microservices. This may make for a larger headache in the end, but I wanted to keep my repositories cleaned up and work on some useful skills at the same time. 
*MDS - 06/03/2022*

Initially setting everything up in routes was extremely tedious, but only having to retrofit two microservices to fit this setup wasn't the worst thing in the world. With everything in place it makes for a much cleaner setup than just loading up the server file or having multiple directories. Also forced me to revisit previous express skills that I had forgotten about. Hopefully after this mornings commit I will only have two APIs left for this section of my certification. The URL shortener microservice was pretty in depth.
*MDS - 06/06/2022*

Trying to build out the exercise tracker inside of this routed structure was proving to be pretty difficult, so I built a replit barebones project just to make sure I was getting all of the conditions to meet properly before I tried to pull it inside of the final product. As of 06/14/2022 I still have some database connection issues to work through with Heroku to get a rough edit of the API up and running. I am going to try and bootstrap out a different setup so it doesn't seem so bland and to touch up a little on some front end work, even though design is definitely not something I love to do.
*MDS - 06/14/2022*
