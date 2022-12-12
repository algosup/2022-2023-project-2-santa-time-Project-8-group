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
    - [Use Case 1](#use-case-1)
    - [Use Case 2](#use-case-2)
    - [Use Case 3](#use-case-3)
    - [Use Case 4](#use-case-4)
    - [Use Case 5](#use-case-5)
    - [Use Case 6](#use-case-6)
    - [Use Case 7](#use-case-7)
    - [Use Case 8](#use-case-8)
    - [Use Case 9](#use-case-9)
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

The website may include a GPS geolocation. It would enable the user to get the direct result without having them write their address.

Later, the team may implement a visual representation of the location. It would be done by having a world map in the background so long it does not impact the server's performance.

Since the service should be available worldwide, translating the website to multiple languages, or even having it translated automatically, could be done to attract even more users.



# Scenarios<!-- = Personaes -->

| Use Case Number # | Name | Description | Actor(s) | Pre-Conditions | Flow of Events | Post-Conditions | Exit Criteria | Function Number # | Notes & Issues |
|--|--|--|--|--|--|--|--|--|--|
| U.C.# 1 | User First Flow | User wants to find out when Santa will arrive at his (or any given) location. | User | User lands on page from either an external site/platform or other project's page. | User goes through the opening animation, and enters their location | The result, according to the desired location is fetched and displayed | The case is closed when either the ETA or the coal is displayed | F1, F2, F3, F4, F5, F6, F7, F8| |
| U.C.# 2 | User Shares Website | User wants to share the website through available means to others | User | User has executed U.C.# 1 | User clicks on any of the given social sharing links/ copy link button | This brings up a template message ready to be sent or copies to clipboard, which user can paste in messaging app directly | The case is closed when user gets confirmation of message being sent. | F9, F10, F11| |
| U.C.# 3 | User Checks out other projects | User wants to check out other group's projects. | User | User has executed U.C.# 1 | User clicks on any of the Christmas tree balls to load one of the other projects | The desired project loads | The case is closed when user can actually start the first flow of the given project | F12, F13| |
| U.C.# 4 | User searches with new address. | User wants to check when Santa will arrive for another address. | User | User has executed U.C.# 1 | User clears the results by entering a new location | The result for the new location loads | The case is closed when either the ETA or the coal is displayed. | F4, F5, F6, F7, F8, F14, F15, F16| |
| U.C.# 5 | User checks out GitHub | User wants to find out more about the project's Code on Github. | User | User has executed U.C.# 1 | User clicks on GitHub button | The github project page opens | The case is closed when the user is able to view the code | F17, F18| |
| U.C.# 6 | User checks out Algosup | User wants to find out more about Algosup. | User | User has executed U.C.# 1 | User clicks on Algosup button | Algosup's website opens | The case is closed when the user is able to view Algosup's website | F19, F20| |
| U.C.# 7 | User wants to contact the Author | User wants to contact the author for bug reporting or issues, for instance | User, Designated Social Media Manager | User has executed U.C.# 1 | User clicks on contact info to reveal a contact e-mail | User sends message to provided email | The case is closed when the user has gotten an answer from the designated contact | F21, F22, F23| |
| U.C.# 8 |User wants to adjust the cookie settings| User wants to adjust the settings for the third party cookies| User| User has landed on the website, cookie settings have popped up| User either: clicks on accept, refuse or customize| The cookie settings are updated| The case is closed when cookie settings update is confirmed via a message| F24, F25, F26, F27, F28| |
| U.C.# 9 |User wants to check the privacy policy| User wants to check the privacy policy| User |User has landed on the website | User clicks on the privacy policy link in the cookie popup | The privacy notice page is displayed| The case is closed when the user can read the privacy notice page's entire content| F24, F25, F26| |


# Functional analysis

### Use Case 1

![UC1](Images/U.C.%23%201.png)

### Use Case 2

![UC2](Images/U.C.%23%202.png)

### Use Case 3

![UC3](Images/U.C.%23%203.png)

### Use Case 4

![UC4](Images/U.C.%23%204.png)

### Use Case 5

![UC5](Images/U.C.%23%205.png)

### Use Case 6

![UC6](Images/U.C.%23%206.png)

### Use Case 7

![UC7](Images/U.C.%23%207.png)

### Use Case 8

![UC8](Images/U.C.%23%208.png)

### Use Case 9

![UC9](Images/U.C.%23%209.png)



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
For this, the team is also required in parallel to do some advertisement for the service and the website.

This will be done by communicating on different social networks.

*We have defined 4 main Personas/Targets:*
- ### French person
  - Michel Mont
  - ![Michel Mont](Images/michel.jpg)
  - Will advertise on various sub-reddits
  - Will advertise on Quora
  
- ### English/International person
  - John Borrison
  - ![John Borrison](Images/john.jpg)
  - Will advertise on various sub-reddits
  - Will advertise on Quora
  
- ### English/International developer
  - Carlos Titswills
    - ![Carlos Titswills](Images/carlos.jpg)
    - Will advertise on Quora from a developer POV
    - Will advertise on StackOverflow from a developer POV
    - Will advertise on Reddit from a developer POV
  
- ### English Tiktoker
  - Gwyneth Nobadu
  - ![Gwyneth Nobadu](Images/gwyneth.jpg)
  - Will advertise on Tik Tok to kids and their parents as well.


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