const URL = "http://localhost:5050/";

const END_POINT = {
    REGISTER: "auth/registration",
    LOGIN: "auth/login",
    LOGOUT: "auth/logout",
    DOCTORS: "doctors",
    SEARCHDOCTORS: "doctors/search",
    PROFILE: "patient",
    EDIT_PROFILE: "patient/edit"    
}

const LIMIT_PAGE = 10;

export {
    URL,
    END_POINT,
    LIMIT_PAGE,
}