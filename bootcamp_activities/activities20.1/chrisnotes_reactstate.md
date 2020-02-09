Why does this exist?

What problem does it solve?

-----

The whole idea of React is that your able to manage the complexity of your app into seperate components. 

Have as many presentation components as possible

Functional Component not classbased lifecycle Components
- You can't add lifecycle methods (componentDidMount, render, etc) to Functional Components



-----
useState

es5
loadingTuple = React.useState([]);
loading = loadingTuple[0];
setLoading = loadingTuple[1];

array destructuring - to update the statevalue and function the way to update the state
const [loading, setLoading] = React.useState(true)


--------------
useEffect

function and optional array
-function decides which side effect to run
-array defines what to resync or what runs the effect

hook called useEffect (use side effect)
React.useEffect(() => {
	document.title = `Hello, ${username}`
	}, [username])

useEffect is like a componentDidMount lifecycle,  it renders after the compoent is rendered (but more than once) (componentWillMount is not needed because anywhere in the Functional Component)

useEffect with a empty array passed will run once like componentDidMount (empty array of dependencies, use effect will run any dependency changes)

  useEffect(() => {
  },[]);


The Same useEffect function can include a return function that would run have the rendering.. like componentWillUnmount

// componentWillMount with componentWillUnmount
 useEffect(() => {
    console.log("useEffect");
    fetchData();
    return () => {
      console.log("cleaning up");
    }
  }, [props.selectedChar]);

// componentWillUnmount
 useEffect(() => {
    return () => {
      console.log("component did unmount");
    }
  }, []);



----------

React.memo - ShouldComponentUpdate - Stores Render handled by React

export default React.memo(Character);

//or can have more control that can send true/false

export default React.memo(Character, (prevProps,nextProps) => {
	return nextProps.selectedChar !== nextProps.selectedChar 
} );

----------
Custom hook folder

hooks/http.js

export const useHttp = () => {
    
};





CustomHooks can be included in any component and can share useEffect.
Helps share stateful logic

Allow you to create every component as functional component

function useRepos(id){
	const [loading, setLoading] = React.useState(true)
	const [repos, setRepos] = React.useState([]])

	React.useEffect(() => {
		setLoading(true);

	}, [id])
 
 	//returns just the statevalue's
	return [loading.repos]

}

...

function ReposGrid ({id}){
	const [loading, repos] = useRepos(id)
}



const [state, setState] = useState({
selectedCharacter: 1,
side: 'light',
destroyed: false
}) 
