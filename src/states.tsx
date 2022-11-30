import {atom} from 'recoil';

const radioState = atom({
    key:'radioState',
    default: '',
})
const textAreaState = atom({
    key:'textAreaState',
    default:''
})
const modalState = atom({
    key:'modalState',
    default:false,
})

export {radioState,textAreaState,modalState}