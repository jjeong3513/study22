import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';


let YellowBtn = styled.button`
  background : ${props => props.bg}; //props로 컴포넌트 재활용 가능
  color : ${props => props.bg == 'blue' ? 'white' : 'black'};
  padding : 10px;
`
let NewBtn = styled.button(YellowBtn) // 기존 스타일 복사 가능

const Detail = (props) => {

  let {id} = useParams();
  /*
  let productFound = props.shoes.find(function(x){
    return x.id == id
  }); */

    return (
        <div>
            <div className="container">
              <YellowBtn bg="blue">Btn</YellowBtn>
              <YellowBtn bg="orange">Btn</YellowBtn>
                <div className="row">
                  <div className="col-md-6">
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                  </div>
                  <div className="col-md-6">
                    <h4 className="pt-5">{props.shoes[id].title}</h4>
                    <p>{props.shoes[id].content}</p>
                    <p>{props.shoes[id].price}</p>
                    <button className="btn btn-danger">주문하기</button> 
                  </div>
                </div>
            </div> 
        </div>
    );
};

export default Detail;