import React, { useState } from "react";

function useSmartPassword() {
    const [isValid, setValid] = useState(false);

    const onChange = e => {
        const newValue = e.target.value;
        let _isValid = false;
        if (newValue.length >= 8) _isValid = true;
        setValid(_isValid);
    };

    return [isValid, onChange];
}

export default useSmartPassword;