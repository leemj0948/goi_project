import React, { ReactEventHandler, useState } from 'react';
import styled from 'styled-components';
export default function guidebook(){
    const [inputData,setInputData] = useState('')
    const submitInput = (e:React.KeyboardEvent<HTMLInputElement>) =>{e.key==='Enter'&&console.log(inputData)}
    const inputHandler = (e:React.ChangeEvent<HTMLInputElement>) =>setInputData(e.target.value)
    return (
        <Wapper>
            <Title>가이드북 검색</Title>
            <InputArea>
            <input placeholder='텍스트를 입력해주세요.' value={inputData} onChange={inputHandler} onKeyDown={submitInput}/>
            <div><p>29</p>건의 검색 결과가 있습니다.</div>
            </InputArea>
            <SearchList>
                <ul><p>•</p> 장례식 부조금 봉투 쓰는 법</ul>
                <SubList>(장례 상식 / 2022-10-31)</SubList>
            </SearchList>
        </Wapper>
    )
}
const Wapper = styled.section`
  padding: 2.5rem 1rem 0;
  height: 100%;
  min-height: 575px;
  width: auto;
`;
const Title = styled.h1`
margin-bottom: 1rem;
font-size: 1.5rem;
font-weight: bold;
`;
const InputArea = styled.div`
height: 50px;
input{
    padding: 10px;
    width: 90%;
    height: 90%;
    background-color: #d3d3d3;

    border: none;
    border-radius: 5px;

}
div{
    display: flex;
    font-weight: bold;
    margin: 0.5rem;
    p{
        color: green;
    }
}
`;
const SearchList =styled.div`
margin-top: 50px;
height:100px;
ul {
   display:flex;
   font-size: 1.5rem;
   font-weight: bold;
   p{
    margin-right:5px;
   }
}

`;
const SubList =styled.p`
font-size:1.1rem;
padding: 10px 0 0 20px;
color: grey;`