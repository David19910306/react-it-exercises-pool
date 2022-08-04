import {Routes, Route} from 'react-router-dom'
import routers from './router'

function App() {
  return (
    <>
      <Routes>
        {
          routers.map(route => <Route key={route.path} path={route.path} element={route.element }></Route>)
        }
      </Routes>
    </>
  );
}

export default App
