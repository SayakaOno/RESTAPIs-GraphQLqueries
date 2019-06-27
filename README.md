# REST API with GraphQL
Simple application that calls REST APIs inside a GraphQL query.<br/>
(The API Key is not in this repository.)<br/>
![Ghibli](https://user-images.githubusercontent.com/33141219/60302968-12ff4800-98ea-11e9-81ce-f973da4e4683.png)


## APIs
- [Studio Ghibli API](https://ghibliapi.herokuapp.com)
- [Google Custom Search](https://developers.google.com/custom-search)
                  
		   
## Query Architecture

  ─ people<br />
       ├── name\*1<br />
       ├── species(URL\*2)<br />
       ├── species2(API call with URL\*2)<br />
       |    ├── name<br />
       |    └── classification<br />
       ├── films(URL\*3)<br />
       ├── film(API call with URL\*3)<br />
       |     ├── title<br />
       |     └── release_date<br />
       └── image (Google custom search with name\*1)<br />
             └── items<br />


## Specification
Create React App<br/>
Main libraries:
- react-apollo
- apollo-client
- apollo-link
- apollo-link-rest
- graphql
- graphql-tag<br />

css: Semantic UI
