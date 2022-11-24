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



# Scenarios<!-- = Personaes -->

# Functional analysis

![Funcitonal analysis](Images/Functional Analysis.png)

<!-- # Law -->



# Success factors

## Performance and Experience

The service must be fast and reliable.

The service should display the website to the user in less than 2 seconds. The delay should be the same when the user interacts with the website.

The website in itself should be responsive, i.e. it must work and display correctly on any platform, wether it is a computer or a mobile phone.

The UI should remain intuitive and accessible, especially since children might access it.

## Scalability

To handle a large amount of users, the service should be scalable and flexible.

It should be able to deal with at least 5000 requests per second at peak time.
This peak time should last at least 5 minutes.

Each user should not be affected by others. This means their own response time should be respected as stated in the previous section.

## Advertising

## Security

## Other



# Deadlines

- Nov 18:
  - Functionnal specifications complete
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