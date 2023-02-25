import './App.css';
import request from './request';
import Row from './component/Row/Row';
import Banner from './component/Banner/Banner';
import Nav from './component/Nav bar/Nav';
function App() {
  return (
    <div className='App'>
      <Nav />
      <Banner />
      <Row title ="NETFLIX ORIGINALS" fetchUrl= {request.fetchNetflix} isLarge={true} />
      <Row title ="Trending Now" fetchUrl= {request.fetchTrending} />
      <Row title ="Top Rated Movies" fetchUrl= {request.fetchTopRated} />
      <Row title ="Action" fetchUrl= {request.fetchAction} />
      <Row title ="Comedy" fetchUrl= {request.fetchComedy}/>
      <Row title ="Animation" fetchUrl= {request.fetchAnimation} />
      {/* <Row title ="Romance" fetchUrl= {request.fetchRomance}/> */}
      <Row title ="Horror" fetchUrl= {request.fetchHorror}/>
      <Row title ="Documentaries" fetchUrl= {request.fetchDocumentary} theEnd/>
    </div>
  );
}           

export default App;
