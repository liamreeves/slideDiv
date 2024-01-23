import React, { useState } from "react";


function InspireMe() {

    const [toggle, handleToggle] = useState(false)

const alertUser = () => {
    handleToggle(!toggle)
    alert(`The button will now say ${!toggle}`)
}

    return (
        <button onClick={alertUser}>{toggle ? "True" : "False"} </button>
    );
}

export default InspireMe;