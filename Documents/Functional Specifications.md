<h1 style="text-align:center">SantaTime Functional Specifications</h1>

Author: [Léo Chartier](https://github.com/leo-chartier)
Other team members:
- [Jason Grosso](https://github.com/JasonGROSSO)
- [Mathieu Chaput](https://github.com/Chaput-Mathieu)
- [Mathis Kakal](https://github.com/mathiskakal)



<br><br>



<details>
<summary>Table of Content</summary>

- [Overview](#overview)
- [Glossary](#glossary)
- [Scope](#scope)
  - [In Scope](#in-scope)
  - [Out of scope](#out-of-scope)
  - [Future](#future)
- [Scenarios](#scenarios)
- [Functional analysis](#functional-analysis)
- [Success factors](#success-factors)
  - [Performance and Experience](#performance-and-experience)
  - [Scalability](#scalability)
  - [Law](#law)
  - [Advertising](#advertising)
  - [Security](#security)
  - [Other](#other)
- [Deadlines](#deadlines)
- [Cost](#cost)

</details>



# Overview

SantaTime is a scalable service. It will take the form of a website which tells people the time at which Santa will come for them.

It will be created at ALGOSUP, a software engineering school, by 4 groups of students during 6 weeks.
Those specifications are made by and for the project group n°8.

This document describes how the service should be designed and how it will function.
It is in no way complete does not reflect the final representation of the design.
<!-- TODO: This document should be complete but might still contain errors. Please contact me if you find any mistakes. -->

# Glossary

| Expression     | Definition                                                                                                  |
| -------------- | ----------------------------------------------------------------------------------------------------------- |
| Solar midnight | Time at which the sun is opposite of a location relative to the Earth. It is exactly between dawn and dusk. |
| The Team       | The four students making this project whose names are written at the beginning of this document.            |



# Scope

## In Scope

This service will take the form of a website. It should contain a form requesting a postal address from the user. Once that form is filled and sent, the website should calculate the solar midnight for Christmas and display a countdown to it.

**IMPORTANT NOTE:**
The goal of this project is not about when Santa will come nor the website itself, it is about how many users can be handled at once without any problem.

The marketing will also be done by the team and should bring in a maximum of user to reach the goal of 5000 users simultaneously.

The website should be simple to improve the rates as much as possible, and not hinder the user experience.

## Out of scope

The service should not rely on any GPS location service at first.

Also, the service should not rely on any API to convert the postal address to coordinates. We will have to host our own database containing all the addresses over the world.
This is because the service should not just be making API calls but instead really make heavy calculations whild still being performant.

## Future

A GPS geolocalisation service may be included in the website, to enable the user to see the result for their location, without having them to write their address.

A visual representation of the location by having a worldmap in the background may still be implemented later, so long it does not impact the server performances.

Since the service should be available worldwide, translating the website to multiple languages, or even have it be translated automatically, could be done to attract even more users.



# Scenarios<!-- = Personaes -->

*TBD*

# Functional analysis

*TBD*

![Funcitonal analysis](Images/Functional Analysis.png)



# Success factors

## Performance and Experience

The service must be fast and reliable. It should have an uptime of at least 99%.

The service should display the website to the user in less than 2 seconds. The delay should be the same when the user interacts with the website.

The website in itself should be responsive, i.e. it must work and display correctly on any platform, wether it is a computer or a mobile phone.

The UI should remain intuitive and accessible, especially since children might access it.

## Scalability

To handle a large amount of users, the service should be scalable and flexible.

It should be able to deal with at least 5000 requests per second at peak time.
This peak time should last at least 5 minutes.

Each user should not be affected by others. This means their own response time should be respected as stated in the previous section.

For this, the service will be hosted on different servers and include a self replicating system to create an other instance of itself when there is too much load.

## Law

*TBD*

## Advertising

To verify if the service is indeed scalable and performant, we need to attract as many people as we can.
For this, the team is also required in parallel to do some advertisement for the service and the website.

This will be done by communicating on different social networks.

For each personae from the [scenarios](#scenarios), an account will be created on some of the following networks:
- Quora
- Reddit
- Stack Overflow
- TikTok

Additionaly, the team will use their professional and/or personal accounts to promote the service and website as well. Those are **???** but not limited to the following networks:
- The same 4 networks as the personaes
- LinkedIn
- Twitter
- Facebook
- Messenger
- Snapchat
- Instagram
- Discord
- Family, friends and relatives

## Security

Not only must the service handle many requests, it should withstand a DDOS attack.
This means even if the service gets more requests than it can handle, it should not stop running and delivering content.

As for the user data, it should be sent securely to prevent potential hacker from accessing their data.
The data must only be processed and not stored. Only one value may be stored client-side -the final time value- to keep updating the counter without having to send a new request every sencond.

Inputs will have to be sanitized before being processed.

Anonymity regarding the team members may be conivable if some of them do not want their identity revealed (in case of mean comments regarding the quality of their work or even threats regarding mass adverising). This point will have to be decided later on.

## Other

*TDB*



# Deadlines

- Nov 18:
  - Basic specifications complete
- Nov 25:
  - Working website
- Dec 2:
  - Marketing done
  - Real users
- Dec 9:
  - Service holding heavy load
- Dec 16:
  - Client presentation

# Cost

The project must be completed with no costs. The project will be running on a server provider with free credits given to students accounts.

In case those are not sufficients, the client might provide funds for the servers but this is to be **avoided as much as possible**.

A cost analysis and complete report will have to be made and give to the client later. <!-- TODO -->