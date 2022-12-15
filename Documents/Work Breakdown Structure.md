<details>
<summary>Table Of Content</summary>

- [1. Planning](#1-planning)
  - [1.1 Get to know the project](#11-get-to-know-the-project)
    - [1.1.1 Get the requirements from the client](#111-get-the-requirements-from-the-client)
    - [1.1.2 Discuss and prepare](#112-discuss-and-prepare)
  - [1.2](#12)
  - [1.3 Make the documents](#13-make-the-documents)
    - [1.3.1 Functional specifications](#131-functional-specifications)
    - [1.3.2 A](#132-a)
- [2. Website](#2-website)
  - [2.1 Base HTML](#21-base-html)
  - [2.2 Address to location](#22-address-to-location)
    - [2.2.1 Prepare the request for the DB](#221-prepare-the-request-for-the-db)
    - [2.2.2 Finish the request](#222-finish-the-request)
  - [2.3 Location to midnight](#23-location-to-midnight)
  - [2.4 Timer](#24-timer)
  - [2.5 CSS](#25-css)
- [3. Server](#3-server)
  - [3.1 Research](#31-research)
  - [3.2 Setup](#32-setup)
  - [3.3 Deployement](#33-deployement)
  - [3.4 Database](#34-database)
- [4. Marketing](#4-marketing)
  - [4.1 Research](#41-research)
  - [4.2 SEO](#42-seo)
  - [4.3 Communication](#43-communication)
- [5. Other](#5-other)
  - [5.1 Testing](#51-testing)
  - [5.2 Presentation](#52-presentation)

</details><br>





# 1. Planning

## 1.1 Get to know the project

### 1.1.1 Get the requirements from the client

By: Léo

Duration: 1 hour

### 1.1.2 Discuss and prepare

By: All the team

Duration: 1 day

## 1.2

## 1.3 Make the documents

### 1.3.1 Functional specifications

By: Léo & Mathis

Duration: 1 week

Requires:
- [1.1 Get to know the project](#11-get-to-know-the-project)

Description:
- Create the functional specifications for the project

### 1.3.2 A

By: Mathieu

Duration: 1 week

Requires:
- [1.1 Get to know the project](#11-get-to-know-the-project)
- [1.3.1 Functional specifications](#121-functional-specifications)

Description:
- Create the technical specifications for the project

<br>

# 2. Website

By: Jason

Requires:
- [1.1 Get to know the project](#11-get-to-know-the-project)
- [1.3.1 Functional specifications](#121-functional-specifications)

## 2.1 Base HTML

Duration: 4 days

Description:
- Make the bare bones of the website
  - Create a form to write a postal address
  - Create a space where to have a timer

## 2.2 Address to location

### 2.2.1 Prepare the request for the DB

Duration: 2 days

Description:
- Create a function that will:
  - Read the form
  - Convert the form data
  - Make a request to the database
  - Parse the response

### 2.2.2 Finish the request

Duration: 2 days

Requires:
- Common database available ⚠
  - Database that will host the different locations
  - Will be created commonly with the 3 other groups
  - Is a **critical point** of the project
- [2.2.1 Prepare the request for the DB](#221-prepare-the-request-for-the-db)

## 2.3 Location to midnight

Duration: 2 days

Description:
- Make a function to get the "solar midnight" from a location
- In production, it will use the function from [2.2 Address to location](#22-address-to-location)

## 2.4 Timer

Duration: 2 days

Description:
- Create a timer that will countdown to "when Santa will come"
- In prodction, it will use the function from [2.3 Location to midnight](#23-location-to-midnight)

## 2.5 CSS

Duration: continuous

Requires:
- [2.1 Base HTML](#21-base-html)

Description:
- Make the website pretty with CSS

<br>

# 3. Server

By: Mathieu

## 3.1 Research

Duration: 4 days

Requires:
- [1.3.2 Technical specificatons](#122-technical-specificatons)

Description:
- Find where to host the website

## 3.2 Setup

Duration: 1.5 weeks

Requires:
- [3.1 Research](#31-research)

Description:
- Prepare the server and make the connection to it

## 3.3 Deployement

Duration: Continous

Requires:
- [3.2 Setup](#32-setup) 

Description:
- Deploy the website to the server

## 3.4 Database

Duration: 1.5 weeks

Requires:
- [3.2 Setup](#32-setup)

Description:
- Host the address-to-location database

<br>

# 4. Marketing

By: Mathis, Léo

## 4.1 Research

Duration: 3 days

Requires:
- [1.3.1 Functional specifications](#121-functional-specifications)

Description:
- Find different networks to promote our website

## 4.2 SEO

Duration: 1 day

Requires:
- [1.3.1 Functional specifications](#121-functional-specifications)
- [2. Website](#2-website)

Description:
- Improve the visibility of the website on the internet

## 4.3 Communication

By: All the team

Duration: Continuous

Requires:
- [4.1 Research](#41-research)

Description:
- Actively promote the website on as many networks as possible

<br>

# 5. Other

## 5.1 Testing

By: Mathis

Duration: Continuous

Description:
- Test the different components of the project when they are updated

## 5.2 Presentation

By: All the team

Duration: 3 days

Requires:

Description:
- Prepare the presentation in front of the client/school
- Make sure everything is working
- Prepare the results of the network activity