import { PropsWithChildren } from 'react';
import ReactDOM  from 'react-dom';
import styled from 'styled-components';
interface ModalProps{
    onClose : () => void
}
const BackDrop = (props:ModalProps) =>{
    return(
        <Backdrop onClick={props.onClose}></Backdrop>
    )
}
const ModalOverlay = ({children}:PropsWithChildren)=>{
    return (
        <Modaloverlay>
            <div>
                {children}
            </div>
        </Modaloverlay>
    )

}
export default function Modal(props:PropsWithChildren<ModalProps>){
    const selectedElement = document.getElementById('modal');
    if(selectedElement === null){
        return <div></div>
    }
    return (
        <>
        {ReactDOM.createPortal(<BackDrop onClose={props.onClose}/>,selectedElement)}
        {ReactDOM.createPortal(<ModalOverlay >{props.children}</ModalOverlay>,selectedElement)}
        </>
    )
}

const Backdrop = styled.div`
position: absolute;
top: 0;
opacity: 70%;
width:100%;
height:100%;
background-color:grey;
`;
const Modaloverlay= styled.div`
position: absolute;
top: 0;
width:100%;
height:100%;
`;