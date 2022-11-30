import styled from 'styled-components';

export default function Step2(){
return (
    <>
     <Title>견적 요청서 제출</Title>
        <Question>
          <h2>그 밖에, 요청하고 싶은 점이 있나요?</h2>
          <div>
            <textarea cols={Number(40)} rows={Number(15)} placeholder='예) 수의는 이미 준비해서 공제받고 싶은데 가능 할까요?'/>
          </div>
          <TextCounter><p>0자 / 300자</p></TextCounter>
        </Question>
    </>
)
}
const Title= styled.h1`
padding: 1rem 0;
font-size: 1.5rem;
color: black;
font-weight: bold;`;
const Question= styled.div`
h2 {
    padding-bottom: 1rem;
    font-size: 1.1rem;
    color: black;
    font-weight: bold;
  }
div{

}
textarea{
    padding: 10px;
    width: 100%;
    border: none;
    background-color: gainsboro;
    resize:none;
}
`;
const TextCounter = styled.div`
margin: 1rem 0;
text-align: right;
font-size: 0.75rem;
`;