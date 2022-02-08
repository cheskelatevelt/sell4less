import React, { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'

export default function ProfileScreen() {
    const userSignin = useSelector(state => state.userSignin);
    const {userInfo} = userSignin;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(detailUser(userInfo._id))
    }, [])
  return <div></div>;
}
