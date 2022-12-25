//kiem tra email
export const isValidEmail = (stringEmail) =>{
return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(stringEmail))
}
//kiem tra password
export const isValidPassword = (stringPassword)=>
stringPassword.length >3