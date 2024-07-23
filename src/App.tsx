
import './App.css'
import { Blog} from './components/Blog'

function App() {

 return (
  <div className="App">
   <div className="navbar">
    <ul>
     <li><a href="/home" className="link">Home</a></li>
     <li><a href="/blog" className="link">Blog</a></li>
    </ul>
   </div>
    <Blog />
  </div>
 )
}
export default App