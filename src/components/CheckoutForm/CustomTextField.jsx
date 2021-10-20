import React from 'react'
import { TextField, Grid} from "@material-ui/core"
import { useFormContext, Controller} from "react-hook-form"

function CustomTextField() {
    const { control } = useFormContext()
    return (
        <div>
            <Grid item xs={12} sm={6}>
                <Controller
                as={TextField}
                control={control}
                 />
            </Grid>
            
        </div>
    )
}

export default CustomTextField
