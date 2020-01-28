import { SIGN_IN, SIGN_OUT } from "./types";
import CommentServe from "../apis/CommentServe";

export const signIn = (userId) => {
    return {
        type:SIGN_IN,
        payload:userId
    }
};

export const signOut = () => {
    return {
        type:SIGN_OUT
    }
}

export const createComment = formValue => async dispatch => {
    CommentServe.post("/", formValue);
}