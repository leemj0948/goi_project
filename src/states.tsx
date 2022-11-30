import {atom} from 'recoil';

const radioState = atom<string>({
    key:'radioState',
    default: '',
})
const textAreaState = atom<string>({
    key:'textAreaState',
    default:''
})
const modalState = atom<boolean>({
    key:'modalState',
    default:false,
})

export {radioState,textAreaState,modalState}