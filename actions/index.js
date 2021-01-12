export default RECEIV_ENTRY = "RECEIV_ENTRY";
export default ADD_ENTRY = "ADD_ENTRY";

export default function receiveEntry(entries){
return {
    type:RECEIV_ENTRY,
    entries
}
}
export default function addEntry(entry){
return {
    type:ADD_ENTRY,
    entry
}
}