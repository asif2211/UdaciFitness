import {RECEIV_ENTRY,ADD_ENTRY} from '../actions';

export default function entries(state,action)
{
    switch(action.type)
    {
        case RECEIV_ENTRY:
            return{
                ...state,
                ...action.entries
            }
        case ADD_ENTRY:
            return{
                ...state,
                ...action.entry
            }
    }
}