import styled from 'styled-components';
export default function guidebook(){
    return (
        <Wapper>
            <Title>가이드북 검색</Title>
            <InputArea>
            <input placeholder='텍스트를 입력해주세요.'/>
            </InputArea>
        </Wapper>
    )
}
const Wapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: auto;
`;
const Title = styled.h1``;
const InputArea = styled.div``;