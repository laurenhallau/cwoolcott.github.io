# Dynamic Context
In this activity we will continue to practice using the Context API in React. This activity continues where the first activity left off. To help strengthen your Context API skills, you will replace as many instances of prop drilling as you can.

## Instructions

* Replace your React application's src folder with [Unsolved/src](Unsolved/src).

* Install axios by running `npm install axios` in your terminal.

* **Recommended:** Add the Bootstrap and Font Awesome CDNs to your application's `index.html` file:

  ```html
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/css/bootstrap.min.css" />
  ```

* Start the application in dev mode by running `npm start` in your terminal.

* Open your browser to [localhost:3000](http://localhost:3000) and study the rendered application.

* Update this application to include the following:

  * Add a Context API file to the `utils` folder.

  * Remove prop-drilling from the application and replace it with the Context API.

  * The Context object should include the user information and any methods you might.

  * Use a Context Provider to wrap the components that will need access to the Context.

  * Use Context Consumers to access the properties that are stored in the Context.

### Hints

* The Context object that you will create will need to be the same for both the Provider and the Consumer. How can you ensure that it's the same object without using state?

### CHRIS' HINTS

* Create a userContext.js Context in the utils/ folder it should include:
	* login: "", language: "", image: "", handleBtnClick: () => {} 	
* Open  Gallery/  import UserContext from "../utils/userContext";
* Wrap everything in the return with UserContext.Provider
* in JSX, Remove Props from Card Container
* Open CardContainer/ remove imported arguments in function and remove props in Card
* Open Card/ remove imported arguments in function and remove props in Cards 
* Open and Remove Props from CardHeading, CardTitle
* CardBody, CardImage and CardBtn will need to import useContext, as well as import UserContext from "../../utils/userContext". 
	* Within the CardBody, CardTitleText, CardImage Function: const { user } = useContext(UserContext); 
	* Within the CardImage Function: const { user } = useContext(UserContext); 
	* Within The CardBtn Function: const { handleBtnClick } = useContext(UserContext);
* Use the new declared const within each function replacing props

