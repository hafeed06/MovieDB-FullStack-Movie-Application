import {atom, useRecoilState, useRecoilValue} from 'recoil' 

export const authState = atom(
    {
        key: "authState", 
        default: null
    }
)
// TODO : Change userFullInformation into an atom
export const userInformationState = atom(
    {
        key: "userInformation",
        default: {}
    }
)