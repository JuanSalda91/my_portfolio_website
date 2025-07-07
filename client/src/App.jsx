import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';

function App () {
  return (
    <div>
      <h1>My Portfolio</h1>
      <Navbar />
      <hr />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App