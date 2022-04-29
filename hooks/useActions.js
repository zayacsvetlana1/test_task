import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as UserActionCreators from '../store/action-creators/user'
import * as LoginActionCreators from '../store/action-creators/auth'


export const useActions = () => {
	const dispatch = useDispatch()
	return bindActionCreators({...UserActionCreators, ...LoginActionCreators}, dispatch)
 }