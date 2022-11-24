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
- [Scenarios](#scenarios)
- [Functional analysis](#functional-analysis)
- [Success factors](#success-factors)
  - [Scalability](#scalability)
  - [Performance](#performance)
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

The service should be able to deal with at least 5000 requests per second at peak time. <!-- TODO: Define peak time (when, duration) -->

The marketing will also be done by the team and should bring in a maximum of user to reach the goal of 5000 users simultaneously.

## Out of scope

The website should be simple to improve the rates as much as possible, and not hinder the user experience.
This means the UI should be minimalistic, without for example a big world map in the background that shows the selected location.

Moreover, one of the key aspect of this project is to test the capabilities of █████
This means the service should not rely on any GPS location service.
Also, the service should not rely on any API to convert the postal address to coordinates. We will have to host our own database containing all the addresses over the world.



# Scenarios<!-- = Personaes -->

# Functional analysis

![Funcitonal analysis](Images/Functional Analysis.png)

<!-- # Law -->



# Success factors

## Scalability

## Performance

## Advertising

## Security

## Other



# Deadlines

# Cost