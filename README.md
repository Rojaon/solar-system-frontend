# Solar System Program

This project is about Planets and their moons in the solar system.
- [Backend Project](https://github.com/Rojaon/solar-system-backend)

## Table of Contents
- [UML Class diagram](https://github.com/Rojaon/solar-system-frontend#uml-class-diagram)
- [Set up](https://github.com/Rojaon/solar-system-frontend#set-up)
- [Technologies Used](https://github.com/Rojaon/solar-system-frontend#technologies-used)
- [Components and services](https://github.com/Rojaon/solar-system-frontend#components-and-services)
- [Demo](https://github.com/Rojaon/solar-system-frontend#demo)
- [Presentation](https://github.com/Rojaon/solar-system-frontend#presentaion-slides)
- [Future Work](https://github.com/Rojaon/solar-system-frontend#future-work)
- [Resources](https://github.com/Rojaon/solar-system-frontend#resources)
------------------------------------------------------------------------------------------
### UML Class diagram
![class diagram](https://github.com/Rojaon/Solar-System.Midterm-Project/assets/109796364/331cb623-6be2-4dba-a890-fd724778ff1e)

### Set up
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.10.

You need to write in terminal: npm install

### Technologies Used
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Components and services

|Request Method|URL|What to change|Description|
|--------------|---|--------------|-----------|
|Get|http://localhost:8080/api/planets|Nothing|Show all Planets in database|
|Get|http://localhost:8080/api/planets/Earth|Change the planet ID "Earth" with one of the planet in the solar system|Show planet with specified ID|
|Get|http://localhost:8080/api/planets/properties/planetType?planetType=ROCKY_PLANET|Change the planet type "ROCKY_PLANET" or "ICE_GIANT" or "GAS_GIANT"|Show all planet with specified planet Type|
|Post|http://localhost:8080/api/planets/add|Nothing|Create new planet in database|
|Put|http://localhost:8080/api/planets/Saturn|Change the planet ID "Saturn" with one of the planet in the solar system|Update planet|
|Patch|http://localhost:8080/api/planets/diameterInKm/Neptune|Change the planet ID "Neptune" with one of the planet in the solar system|Update the diameter in specific planet|
|Delete|http://localhost:8080/api/planets/delete/Mer|Change the planet ID "Mer"|Delete specific planet|

### Demo

### Presentaion Slides
- [Click here](https://docs.google.com/presentation/d/12hUY_EvqZFUlNjxfFlmXMm3ohNhwGCG4zQOtxM2ypwk/edit?usp=sharing)
### Future Work
- Improve the styling and the routes.
### Resources
- https://online.visual-paradigm.com
- https://thesolarsystem.fandom.com/wiki/List_of_the_largest_moons_by_size
- https://thesolarsystem.fandom.com/wiki/List_of_Planets
