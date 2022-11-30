import {atom} from 'recoil';

const radioState = atom({
    key:'radioState',
    default: '',
})
const textAreaState = atom({
    key:'textAreaState',
    default:''
})

export {radioState,textAreaState}