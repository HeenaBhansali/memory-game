import checkSuccessfulMatch from "./checkSuccessfulMatch"
import thunk from "redux-thunk"
import { applyMiddleware } from "redux"

export default applyMiddleware(thunk, checkSuccessfulMatch)
