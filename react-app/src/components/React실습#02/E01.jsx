import React from "react";
import PropTypes from 'prop-types'
const Profile = ({name, age, address}) => {
return(
    <>
    <h1>안녕하세요. 제 이름은{name}입니다.</h1><br/>
    <h1>저는 {age}살이고, {address}에 살고 있습니다.</h1>
    </>
)
}

Profile.defaultProps = {
    name : "김의현"
}

export default Profile;