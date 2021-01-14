export const  RECEIV_ENTRY = "RECEIV_ENTRY";
export const  ADD_ENTRY = "ADD_ENTRY";

export  function receiveEntry(entries){
return {
    type:RECEIV_ENTRY,
    entries
}
}
export  function addEntry(entry){
return {
    type:ADD_ENTRY,
    entry
}
}