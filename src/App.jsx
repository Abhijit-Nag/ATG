// import './App.css';
import Brochure from './components/brochure/Brochure';
import Contents from './components/contentSection/Contents';
import Navbar from './components/navbar/Navbar';
import Taglines from './components/taglines/Taglines';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Brochure/>
     <Taglines/>
     {/* <hr style={{marginTop:"604px", marginLeft:"200px", width:"74vw" }}/> */}
     <div className="hr" style={{position:"absolute",top:"604px", marginLeft:"200px", width:"74vw",height:"1px", backgroundColor:"#E0E0E0"}}></div>
     <Contents/>
    </div>
  );
}

export default App;
