import React, { useState, useEffect} from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography} from "@material-ui/core"
import { useForm, FormProvider} from "react-hook-form"
import FormInput from './FormInput'
import { commerce } from "../../lib/commerce"

function AddressForm({checkoutToken}) {
    const [ shippingCountries, setShippingCountries] = useState([])
    const [ shippingCountry, setShippingCountry] = useState("")
    const [ shippingSubdivisions, setShippingSubdivisions] = useState([])
    const [ shippingSubdivision, setShippingSubdivision] = useState("")
    const [ shippingOptions, setShippingOptions] = useState([])
    const [ shippingOption, setShippingOption] = useState("")

    const countries = Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name}))

    useEffect( () => {
        fetchShippingCountries(checkoutToken.id)
    })

     const fetchShippingCountries = async (checkoutTokenId) => {
       const { countries } =
         await commerce.services.localeListShippingCountries(checkoutTokenId);

       setShippingCountries(countries);
       setShippingCountry(Object.keys(countries)[0]);
     };


    const methods = useForm()
    return (
      <div>
        <Typography>Shipping Address</Typography>
        <FormProvider {...methods}>
          <form onSubmit="">
            <Grid container spacing={3}>
              <FormInput required name="firstName" label="First Name" />
              <FormInput required name="lastName" label="Last Name" />
              <FormInput required name="address1" label="Address" />
              <FormInput required name="email" label="Email" />
              <FormInput required name="city" label="City" />
              <FormInput required name="zIP" label="Postal Code" />
              <Grid item xs={12} sm={6}>
                <InputLabel>Shipping Country</InputLabel>
                <Select
                  value={shippingCountry}
                  fullwidth
                  onChange={(event) => setShippingCountry(event.target.value)}
                >
                  {Object.entries(shippingCountries)
                    .map(([code, name]) => ({ id: code, label: name }))
                    .map((item) => (
                      <MenuItem key={item.id} value={item.id}>
                        {item.label}
                      </MenuItem>
                    ))}
                </Select>
              </Grid>
              {/* <Grid item xs={12} sm={6}>
                    <InputLabel>Shipping Subdivision</InputLabel>
                    <Select value={} fullwidth onChange ={}>
                        <MenuItem key={} value={}> Select Me </MenuItem>

                        </Select>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputLabel>Shipping Options</InputLabel>
                    <Select value={} fullwidth onChange ={}>
                        <MenuItem key={} value={}> Select Me </MenuItem>

                        </Select>
                </Grid> */}
            </Grid>
          </form>
        </FormProvider>
      </div>
    );
}

export default AddressForm
