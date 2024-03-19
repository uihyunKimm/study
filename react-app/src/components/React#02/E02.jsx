import React from "react";
import PropTypes from 'prop-types'
const stylered = { color : 'red' }
const styleblue = { color : 'blue' }
const styleorange = { color : 'orange' }

const Profile = ({name, age, address}) => {
return(
    <>
    <h1>안녕하세요. 제 이름은 <span className='name' style={styleblue}>{name}</span>입니다.</h1><br/>
    <h1>저는 <span className='age' style={stylered}>{age}</span>살이고, <span className='add' style={styleorange}>{address}</span>에 살고 있습니다.</h1>
    </>
)
}

Profile.defaultProps = {
    name : "김의현"
}
Profile.propTypes = {
    age : PropTypes.number.isRequired,
    address : PropTypes.string
}

export default Profile;