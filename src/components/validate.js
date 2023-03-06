// Validate function
export default function validate(type, data) {

    // My errors
    let errors = {};

    // Name
    if (!data.name) {
        errors.name = "Name is required!";
    } else {
        delete errors.name;
    }

    // Password
    if (!data.password) {
        errors.password = "Password is required!";
    } else if (data.password.length < 6) {
        errors.password = "Min chars = 6";
    } else {
        delete errors.password;
    }
    
    return errors;
}