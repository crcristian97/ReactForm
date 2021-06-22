export default function validateInfo(values){
    let errors = {}

    if(!values.username.trim()){
        errors.username = "Username required"
    }

    if(!values.password){
        errors.password = 'Password is required'
    }else if (values.password.length < 6){
        errors.password = 'Password need to be 6 character or more'
    }

    if(!values.password2){
        errors.password2 = "Password ir required"
    }else if (values.password2 !== values.password){
        errors.password2 = "Password do not match"
    }

    return errors;
}