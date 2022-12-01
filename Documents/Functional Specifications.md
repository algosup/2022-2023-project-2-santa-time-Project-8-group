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

SantaTime is a scalable service. It will take the form of a website that lets people know when Santa will come for them.

It will be created at ALGOSUP, a software engineering school, by four groups of students for six weeks.
Those specifications are made by and for the project group n°8.

This document describes how to design the service and how it will function.
It is in no way complete and does not reflect the final representation of the design.
<!-- TODO: This document should be complete but might still contain errors. Contact me if you find any mistakes. -->

# Glossary

| Expression     | Definition                                                                                                      |
| -------------- | --------------------------------------------------------------------------------------------------------------- |
| Solar midnight | The time at which the sun is opposite of a location relative to the Earth. It is exactly between dawn and dusk. |
| The Team       | The students who created this service and whose names are at the beginning of this document.                    |



# Scope

## In Scope

This service will take the form of a website. It should contain a form requesting a postal address from the user. Once that form is filled and sent, the website should calculate the solar midnight time for Christmas and display a countdown to that time.

**IMPORTANT NOTE:**
The goal of this project is not about when Santa will come or the website itself. Instead, it is about how many users it can handle simultaneously without any problem.

The team should also take care of the marketing. It should bring in a maximum of users to reach the goal of 5000 users simultaneously.

The website should be simple to improve the rates as much as possible. It should not hinder the user experience either.

## Out of scope

The service should not rely on any GPS location service at first.

Also, the service should not rely on any API to convert the postal address to coordinates. We will have to host our database containing all the postal addresses from all over the world.
That is because the service should not just make API calls but instead make all the heavy calculations itself while still being performant.

## Future

The website may include a GPS geolocalisation. It would enable the user to get the direct result without having them write their address.

Later, the team may implement a visual representation of the location. It would be done by having a world map in the background so long it does not impact the server's performance.

Since the service should be available worldwide, translating the website to multiple languages, or even having it translated automatically, could be done to attract even more users.



# Scenarios<!-- = Personaes -->

*TBD*

# Functional analysis

*TBD*

![Functional analysis](Images/Functional Analysis.png)



# Success factors

## Performance and Experience

The service must be fast and reliable. It should have an uptime of at least 99%.

The service should display the website to the user in less than 2 seconds. The delay should be the same when the user interacts with the website.

The website should be responsive, meaning it must work and display correctly on any platform, whether it is displayed on a computer or a mobile phone.

The UI should remain intuitive and accessible, especially since children might access it.

## Scalability

The service should be scalable and flexible to handle many users.

It should be able to deal with at least 5000 requests per second at peak time.
This peak time should last at least 5 minutes.

Each user should not be affected by others. It means their response time should be respected, as stated in the previous section.

As such, the service will be hosted on different servers and include a self-replicating system. It would allow it to create another instance of itself when there is too much load.

## Law

*TBD*

## Advertising

To verify if the service is scalable and performant, we must attract as many people as possible.
For this, the team is also required in parallel to do some advertisements for the service and the website.

This will be done by communicating on different social networks.

For each persona from the [scenarios](#scenarios), the team will create an account on some of the following networks:
- Quora
- Reddit
- Stack Overflow
- TikTok

Additionally, the team will use their professional or personal accounts to promote the service and website. Those are comprising but not limited to the following networks:
- The same four networks as the personals
- LinkedIn
- Twitter
- Facebook
- Messenger
- Snapchat
- Instagram
- Discord
- Family, friends, and relatives

## Security

Not only must the service handle many requests, but it should also withstand a DDOS attack: if the service gets more requests than it can handle, it should not stop running and delivering content.

As for the user data, we must send it securely to prevent potential hackers from accessing private information.
The data must only be processed and not stored. Only one value may be stored client-side -the final time value- to keep updating the counter without sending a new request every second.

We must sanitize the inputs before processing them.

Anonymity regarding the team members may be conceivable. If someone does not want their identity revealed, we will not credit them on the website (in the case of mean comments regarding the quality of their work or even threats regarding mass advertising, for example). We will have to decide on that point later on.

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
  - Service holding a heavy load
- Dec 16:
  - Client presentation

# Cost

We must complete this project at no cost. The service will run on a service provider with free credits given to students' accounts.

If those are not enough, the client might provide funds. It is to be **avoided as much as possible**.

A cost analysis and complete report will have to be made and given to the client later. <!-- TODO -->