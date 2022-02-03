// The string must contain exactly one "@" character
// The string must contain at least one "." character

// The "." and the "@" must be in the appropriate places:
// neither "." nor "@" can be the last character

// "." can neither be directly before, nor directly after, "@"
// there cannot be consecutive "." characters
// "@" must have at least one character in front of it
// Examples:

// "j@example.com" is valid while "@example.com" is invalid
// e.g. "john.smith@com" is invalid while "john.smith@email.com" is valid
// e.g. "john..smith@email.com" and "john.@email.com" and "john@.email.com" are all invalid


function isEmailValid(email) {
    let dotIndex = email.indexOf(".");
    let atIndex = email.indexOf("@");

    if (atIndex === -1) {
        return false;
    }

    // compare indexOf("@") with lastIndexOf("@")
    // split("@") check the length of the array
    let emailNoAt = email.replace("@", "");
    if (emailNoAt !== email.length - 1) {
        return false;
    }

    if (dotIndex === -1) {
        return false;
    }

    // email.endsWith("@")
    // email.startsWith("@")
    if (dotIndex === email.length - 1 || atIndex === email.length - 1) {
        return false;
    }
    

    return true;
}


isEmailValid("j@example.com"); // valid
isEmailValid("@example.com"); // not valid
isEmailValid("john.smith@com"); // not valid
isEmailValid("john.smith@email.com"); // valid
isEmailValid("john..smith@email.com"); // not valid
isEmailValid("john.@email.com"); // not valid
isEmailValid("john@.email.com"); // not valid