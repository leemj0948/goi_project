import Modal from './Modal';
import styled from 'styled-components';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { modalState, radioState } from '@src/states';

interface Iprops{
    onClose: ()=>void
}
export default function ModalBody(props:Iprops){
    const modalHandler = useSetRecoilState<boolean>(modalState);
    const modalClose = ():void =>{modalHandler(()=>false)}
    const prevSelectValue = useRecoilValue<string>(radioState)
return(
    <Modal onClose={props.onClose}>
        <ModalContents>
            <ModalMessage>
                <ModalHead>요쳥 완료</ModalHead>
                <Body>
                    <p>장례 준비 긴급도</p>
                    <p>{prevSelectValue}와</p>
                    <p>요청사항이 전달되었습니다.</p>
                </Body>
                <ConfirmBtn onClick={()=>modalClose()}>확인</ConfirmBtn>
            </ModalMessage>
         
        </ModalContents>
    </Modal>
)
}

const ModalContents = styled.div`
display:flex;
align-items: center;
justify-content: space-around;
width:100%;
height: 575px;
text-align: center;
`
const ModalMessage = styled.section`
width: 75%;
    height: 43%;
background-color:white;
`;
const ModalHead = styled.h1`
display: block;
text-align: center;
margin:1rem auto 0;
padding-top: 1rem;
height: 20%;
font-weight: bold;
`;
const Body = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
height: 37%;
p{
    padding-bottom: 10px;
}
`;
const ConfirmBtn = styled.button`
display: block;
height: 17%;
background-color: black;
color: white;
padding-top: 10px;
width: 80%;
margin: 1rem auto;
`;