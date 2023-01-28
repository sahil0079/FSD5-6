import { lazy, Suspense, useState } from 'react';
import './App.css';
import Header from './Header';
// import { transformToUppercase } from './utilities';
// import usernames from './usernames';
// import DefaultComponent from './DefaultComponent';

//lazily loading the component

const DefaultComponent = lazy(() => import("./DefaultComponent"))

function App() {
  const [usernames, setUsernames] = useState(null)

  // const onLoad = () => {
  //   import('./usernames').then(module => {
  //     // console.log('module', module)
  //     setUsernames(module.default)

  //     import('./utilities' /* webpackChunkName: "utilities" */).then(({ transformToUppercase }) => {
  //       // console.log(module)
  //       setUsernames((prevUsernames) => transformToUppercase(prevUsernames))
  //     })
  //   })
  // }
  const onLoad = async () => {
    const usernames = (await import('./usernames')).default
    const transformToUppercase = (await import('./utilities' /* webpackChunkName: "utilities" */)).transformToUppercase

    // console.log(usernames)
    setUsernames(transformToUppercase(usernames))
  }
  return (
    <div className="app">
      <Header />
      {/* <h1>App</h1> */}
      <h2>{JSON.stringify(usernames)}</h2>
      <button onClick={onLoad} >Load Data</button>
      <Suspense fallback={<h1>Loading.....</h1>}>
        <DefaultComponent />
      </Suspense>
    </div>
  );
}

export default App;
