import React from "react"
import { useFormikContext } from "formik"


import CustomTextInput from "../CustomTextInput"
import ErrorMessage from "./ErrorMessage"

export default function CustomFormField({ name, ...otherProps }) {
    const { handleChange, errors, setFieldTouched, touched } = useFormikContext()
    return (
        <>
            <CustomTextInput
                {...otherProps}
                onChangeText={handleChange(name)}
                onBlur={() => setFieldTouched(name)}
            />
            <ErrorMessage
                error={errors[name]}
                visible={touched[name]}
            />
        </>
    )
}


