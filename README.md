# TheScoreKeeper
## GA Final Project
### Fri, May 21, 2021
Team Members:
 - Sidney Avila  
 - Pete Micsunescu
## Overview: 
The Score Keeper App provides baseball/softball coaches a convenient way to manage and track their players and staff. The Score Keeper App features a cloud-based backend which means that your data is not only secure, but always available. The Score Keeper App gives coaches the tools they need to focus more on what's important...WINNING! 
## User Stories
- As a user I want to . . .
  - View all available teams.
  - Be able to create a Coach account.
  - Retrieve a team contact list.
  - Search teams playing near me.
  - Email main point of contact for selected team.
  - View W/L for teams for season.
- As a coach I want to . . .
  - Create a team roster.
  - Input team name.
  - Input team logo.
  - Input player name (first and last).
  - Input player number.
  - Input player position on defense.
  - Input player batting order.
  - Create and retrieve a team contact list.
  - Update a player position if substituted or injured.
  - Choose home or away.
  - Determine if the player is left / right handed.
  - Create, Update, and retrieve team staff members.
## Entity Relationship Diagram (ERD):
The ERD below demonstrates how the many entities of The Score Keeper App relate to each other. This is an overview of the API's business process logic. Notice the crow's foot notation specifying the multiplicity relationships between the entities. 
There are two relationships and three entites:
* One-to-One between Coach and Team.
* One-to-Many between Team and Member.
![Screen Shot 2021-05-21 at 11 53 23 AM](https://user-images.githubusercontent.com/67444113/119172169-35913180-ba2b-11eb-88b2-6d7857eec6ec.png)
## Challenges Faced :
- Figuring out the mappings between our models was challenging at the beginning, but became much easier once we made the ERDs.
- Configuring Angular's RouterLink to direct proper user flow throughout the application.
- Accessing the Materialize CSS to customize our application's look.
- Deploying to Heroku was tricky. Particularly, taking care of CORS issues and linking Heroku's DB to our backend.
## Future Plans :
* Extensive testing on both FrontEnd and BackEnd.
* Give the coach an option to change/Reset password.
* Add a new table and entity model to store player statistics.
* UI/UX elements for giving feedback on forms and inputs.
## What Would We Do Differently?
* Allocating time and resourses on tasks of higher priority, as opposed to addressing tasks as they arise.
* Leverage Materialize grid system from the start.
## What Are We Most Proud Of?
* Confidence in being able to research unfamiliar topics and utilize them as necessary. 
## How Did We Plan Our Project?
* Slack.
* Google Docs.
* www.app.diagrams.net for online ERD design collaboration. 
* Zoom meeting. 
* GitHub.
* Adobe XD for wire-framing.
## What We Learned
* Project structuring using MVC model. 
* GitHub branching and merging pull requests.
* Creating a CRUD API using the SpringBoot Framework.
* When and how to use many different annotations found in SpringBoot.
* Many-to-Many, Many-to-One, & One-to-One entity relationships.
* Understanding API endpoints and server requests and responses.
* Angular components and routing.
## WireFrames
* Before coding the frontend, we created the different pages using AdobeXD.
![Screen Shot 2021-05-21 at 12 34 54 PM](https://user-images.githubusercontent.com/67444113/119176866-362cc680-ba31-11eb-8e53-bde696bdf4a2.png)
![Screen Shot 2021-05-21 at 12 35 00 PM](https://user-images.githubusercontent.com/67444113/119176868-36c55d00-ba31-11eb-9057-2e95960240da.png)
![Screen Shot 2021-05-21 at 12 35 05 PM](https://user-images.githubusercontent.com/67444113/119176870-36c55d00-ba31-11eb-83b0-135f3b0b3285.png)
![Screen Shot 2021-05-21 at 12 35 13 PM](https://user-images.githubusercontent.com/67444113/119176871-36c55d00-ba31-11eb-9fd8-29746f772c4f.png)
![Screen Shot 2021-05-21 at 12 35 25 PM](https://user-images.githubusercontent.com/67444113/119176873-375df380-ba31-11eb-8992-69bcd1a3f6e6.png)
## Link to Live Deployment on Heroku
https://stormy-gorge-82925.herokuapp.com/
