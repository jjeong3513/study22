import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js';
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom';
import Detail from './pages/Detail';


function App() {

  let [shoes] = useState(data)
  let navigate = useNavigate();

  return (
    <div className="App">

      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">ShoesShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail') }}>Detail</Nav.Link>
          </Nav> 
        </Container>
      </Navbar>

      {/* 
      <Link to="/" className='home'>홈</Link>
      <Link to="/detail" className='detail'>상세페이지</Link>
       */}

      <Routes>
        <Route path="/" element={
        <div>
          <div className='main-bg'></div>
          <div className='container'>
          <div className='row'>

             {
               shoes.map((a,i)=>{  //a,i는 파라미터
                 return(
                  <Card shoes={shoes[i]} i={i+1}></Card> //i={i} 라고 하면 이미지가 인덱스번호에 맞게 나오기 때문에 +1을 해줘야함
                 )
               })
             }
          </div>
        </div>
        </div>
        }/>
        <Route path="/detail/:id" element={<Detail  shoes={shoes}/>}/> 
      

        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>member</div>} />
          <Route path="location" element={<div>location</div>} />
        </Route>
        {/* 
        <Route path="/event" element={<Event></Event>}>
          <Route path='one' element={<p>첫 주문시 양말 서비스</p>}/>
          <Route path='two' element={<p>생일기념 쿠폰받기</p>}/>
        </Route>
         */}
        <Route path="*" element={<div>없는 페이지</div>}/>
      </Routes>

      
    </div>
  );
}

function Card(props){
  return (
    <div className='col-md4'>
          <img src={'https://codingapple1.github.io/shop/shoes'+ props.i +'.jpg'} alt=""  width='80%'/>
          <h4>{props.shoes.title}</h4>
          <p>{props.shoes.price}</p>
      </div>
  )
}


function About(){
  return (
    <div>
      <h4>회사정보</h4>
      <Outlet></Outlet>
    </div>
  )
}
/*
function Event(){
  return(
    <div>
      <h2>오늘의 이벤트</h2>
      <Outlet></Outlet>
    </div>
  )
}
*/
export default App;
