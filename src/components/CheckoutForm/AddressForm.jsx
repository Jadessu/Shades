import React from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography} from "@material-ui/core"
import { useForm, FormProvider} from "react-hook-form"

function AddressForm() {
    const methods = useForm()
    return (
        <div>
            <Typography>Shipping Address</Typography>
            <FormProvider {...methods}>
                <form onSubmit={}>
                <Grid container spacing={3}>
                    
                </Grid>
                </form>

            </FormProvider>
            
        </div>
    )
}

export default AddressForm
