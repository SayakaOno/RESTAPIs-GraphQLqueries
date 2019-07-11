# REST API with GraphQL
A simple application that calls REST APIs inside a GraphQL query.<br/>
(The API Key is not in this repository.)<br/>
![Ghibli](https://user-images.githubusercontent.com/33141219/60302968-12ff4800-98ea-11e9-81ce-f973da4e4683.png)


## APIs
- [Studio Ghibli API](https://ghibliapi.herokuapp.com)
- [Google Custom Search](https://developers.google.com/custom-search)
                  
		   
## Query Architecture

     ─ people (Studio Ghibli API)
         ├── name*1
         ├── species(URL*2)
         ├── species2(API call with URL*2)
         |     ├── name
         |     └── classification
         ├── films(URL*3)
         ├── film(API call with URL*3)
         |     ├── title
         |     └── release_date
         └── image (Google custom search with name*1)
               └── items


## Specification
Create React App<br/>
Main libraries:
- react-apollo
- apollo-client
- apollo-link
- apollo-link-rest
- graphql
- graphql-tag<br />

CSS: Semantic UI
