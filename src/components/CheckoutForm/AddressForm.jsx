import { Grid, Typography } from "@material-ui/core";
import { FormProvider, useForm } from "react-hook-form";
import CustomTextField from "./CustomTextField";

const AddressForm = () => {
  const methods = useForm();

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit="">
          <Grid container spacing={3}>
            <CustomTextField required name="firstName" label="First Name" />
          </Grid>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
