<h1 style="text-align:center">SantaTime Technical Specifications</h1>

Team members:
- [Mathieu Chaput](https://github.com/Chaput-Mathieu) : Tech Lead (Author)
- [Léo Chartier](https://github.com/leo-chartier) : Project Manager
- [Jason Grosso](https://github.com/JasonGROSSO) : Software Engineer
- [Mathis Kakal](https://github.com/mathiskakal) : Quality Assurance


<details>
<summary>Table of Content</summary>

- [Overview](#overview)

</details>

# Overview

SantaTime is a scalable service. It will take the form of a website which tells people the time at which Santa will come for them.
This document describes how the service will be made.
For more information of what the service does, please refer to the [functional specification](https://github.com/algosup/2022-2023-project-2-santa-time-Project-8-group/blob/documents/Documents/Functional%20Specifications.md).
This project will be made with :
- Web Technologies such as HTML, CSS, JavaScript
- NodeJS for the server
- Docker for the compatibility and Azure deployment
- Kubernetes for the scalability


<!-- b. Glossary  or Terminology -->

# Solution

<!-- External components that the solution will interact with and that it will alter -->
<!-- Dependencies of the current solution -->
### Hosting and Scaling
In order to host our solutions we researched different providers and decided on [Azure](https://azure.microsoft.com/fr-fr/) because it provided us a robust solution without having any budget. In addition Azure allows us to build a service using Kubernetes which will allow our website to scale in order to handle lots of users.
Kubernetes is a system that will automate the scaling and the management of our containers which will make the website able to handle a higher load. It will also manage the isntances of the website, allowing for better stability by deleting the containers that stop working and starting others.
Since we are not building our own solution, we have a dependency to Azure. 

### Frontend
The frontend will be made using HTML, CSS and JavaScript. The website will have a single input that will ask for an address. The user will then be able to click on a button to get the time at which Santa will come for them. The website will then display the time and the address. The website will also have a button to get the time for another address.

### Backend
The backend will be made using NodeJS. It will use [Express](https://expressjs.com/) to create and handle the server. It will be hosted on Azure and will be able to handle requests from the frontend. The request will be forwarded to the database to get the coordinates. Thanks to those coordinates it will find the position of santa. The backend will then send the time and the address to the frontend.

### Database
Our website needs to be able to tell the time at which santa will come. To do that we will host a database that will give us the coordinates of the address the user will provide us. This database will be setup with [photon](https://github.com/komoot/photon) which is a geocoder built for [OpenStreeMap](https://www.openstreetmap.org/)
This database will also be hosted on Azure. The database will take in input an address or part of it and will output the adresses corresponding.
In order to request the user address to the database we will have to check the input and handle errors if the database can't find a response.

### Error handling
Since we are asking for the input of a user we will need to handle errors that might come.
If the user doesn't give an address the website will ask again for an input.
If the database doesn't return anything with the given address the website will tell the user and then ask for another input.  

### Santa's position
Our service will then find the right address and compute from that to find the position of the sun. To do this calculation we will use [SunCalc](https://github.com/mourner/suncalc) which is a javascript library that will give us the position of the sun at a given time and location. From this we will be able to tell when santa will come.
<!-- Pros and cons of the proposed  solution  -->
<!-- (Data Model / Schema Changes
Schema definitions
New data models
Modified data models
Data validation methods) db ? -->
<!-- Error handling
How will the solution scale?
How will it recover in the event of a failure? -->
<!--What are the limitations of the solution?-->
<!-- 
d. Monitoring and Alerting Plan 
    Logging plan and tools
    Monitoring plan and tools
    Metrics to be used to measure health
    How to ensure observability
    Alerting plan and tools -->

e. Release / Roll-out and Deployment Plan
    Deployment architecture 
    Deployment environments

### Assumptions
As said earlier, since we are using Azure and Kubernetes we have a dependency to them. If they are down we won't be able to deploy our website. Therefore we assume that these services will keep working in the future.

# Further Considerations

### Cost analysis
The budget we are provided for this project is 0€ so we won't be able to pay for a hosting service. We will use Azure which grants us 200€ worth of credits for 1 months. After that we will have to pay for the services we use. We will be able to use the free tier however this tier does not have the machines required for the service to run.
<!-- What is the cost to run the solution per day?
What does it cost to roll it out?  -->


### Security considerations 
Our service doesn't have anything sensitive to protect. The only thing we need to do is to make sure that the user can't access the database directly. We will do this by using a proxy that will only allow the website to access the database.
<!-- What are the potential threats?
How will they be mitigated?
How will the solution affect the security of other components, services, and systems? -->
<!-- 
e. Privacy considerations
    Does the solution follow local laws and legal policies on data privacy?
    How does the solution protect users’ data privacy?
    What are some of the tradeoffs between personalization and privacy in the solution? 

-->

### Risks
One of the risk we are taking with our solution is that we are using a service that we don't own. This means that we don't have control over the service and we can't be sure that it will work in the future.
We are also only using the free version of this service which grants us machines that are not as powerful as we could need to handle a high load.
<!-- What risks are being undertaken with this solution?
Are there risks that once taken can’t be walked back? -->
<!-- What is the cost-benefit analysis of taking these risks?  -->

# Success Evaluation

### Metrics
We will have two phases to measure the performance and the success of the service. 
First we will test it ourselves and see how many users we can handle and how long the website takes to respond. 
This test will allow us to define the limitations of our service and also the limitations of the machines we are using.
Then we will deploy it and see how many users we can handle and how long the website takes to respond again.
This test with real users will allow us to see if the service handles well a real load of users and also will allow us to measure the success of the advertisement.
<!-- List of metrics to capture
Tools to capture and measure metrics -->