In this activity we will practice using the useContext Hook in React by creating a global state for our articles.

  # Instructions

  * Replace your React application's src folder with [Unsolved/src](Unsolved/src).

  * Start the application in dev mode by running `npm start` in your terminal.

  * Open your browser to [localhost:3000](http://localhost:3000) and study the rendered application.

  * Update this application to accomplish the following:

  * Combine all of the `useState` Hooks that are relevant to the information retreived from the Wikipedia article into a single `useState` Hook.

  * Create a Context Object that will be used to store the state of the article called `ArticleContext`. (DONE)

  * Wrap the components that will need access to the Context Object with a Context Provider.

  * Update the `SearchResults` component with the `useContext` Hook to to elimintate the need for props.

  ### Chris' Notes:
  *	 Start with the Search/index.js page; import ArticleContext from "../../utils/ArticleContext"
  *	 remove title, description and url useState's
  *	 Replace with one useState; const [articleState, setArticleState] as a useState. Set the value to an object with title:"", description:"", url:""
  *	 Replace the setTitle, setDescription and setUrl in the API.searchterms with setArticleState. Redistribute the previous values but now for title, description and url in setArticleState. 
  *	 Within the return, wrap all of the contents with the ArticleContext.Provider with a value of {articleState}
  *	 Remove the props in Search Results.
  *	 Open SearchResults/index.js 
  *	 Include useContext from React Library
  *	 import ArticleContext from "../../utils/ArticleContext"
  *	 Within the SearchResults functions set const {title, description, url} = useContext(ArticleContext);
  *	 Update the values in the JSX remove props.VALUE with VALUE (ie: props.title is now just title)

 