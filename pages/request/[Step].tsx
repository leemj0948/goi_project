import styled from 'styled-components';
import Link from 'next/link';

export default function Step() {
  return (
    <Wapper>
      <Contents>
        <Steps>1/2</Steps>
        <Title>견적 요청서</Title>
        <Question>
          <h2>장례 준비가 긴급한 상황일까요?</h2>
          <div>
            <label>
              <input type="radio" name="chk_info" value="1" />
              급하지 않지만 미리 알아보려고 해요.
            </label>
            <label>
              <input type="radio" name="chk_info" value="2" />
              1달 정도 기간이 남은 것 같아요.
            </label>
            <label>
              <input type="radio" name="chk_info" value="3" />
              임종이 얼마 남지 않았어요.
            </label>
          </div>
        </Question>
      </Contents>
      <NextBtn>
        <Link href="/request/2">다음</Link>
      </NextBtn>
    </Wapper>
  );
}

const Wapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: auto;
`;
const Contents = styled.section`
  padding-top: 3rem;
  padding: 1rem;
  height: 520px;
`;
const Steps = styled.h1`
  padding: 1rem 0 0;
  font-size: 1.5rem;
  color: lightgrey;
  font-weight: bold;
`;
const Title = styled.h1`
  padding: 1rem 0;
  font-size: 1.5rem;
  color: black;
  font-weight: bold;
`;

const Question = styled.div`
  margin: 2rem 0;
  h2 {
    padding-bottom: 1rem;
    font-size: 1.1rem;
    color: black;
    font-weight: bold;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 5rem;
    label {
      color: grey;
      input {
        margin-right: 10px;
        width: 15px;
        height: 15px;
      }
    }
  }
`;
const NextBtn = styled.div`
  height: 3.5rem;
  width: 100%;

  a {
    display: block;
    background-color: black;

    text-align: center;
    padding: 1rem;
    color: white;
    &:visited {
      color: white;
    }
  }
`;
