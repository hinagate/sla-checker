import { useParams, Link as RouterLink } from "react-router-dom";
import {
  useGetOne,
  useRedirect,
  Title,
  useNotify,
  Form,
  Labeled,
  NumberField,
  useRecordContext,
  TextField,
  TextInput,
  SimpleForm,
  Show,
  Edit,
  Create,
  ReferenceInput,
  RecordContextProvider,
  CheckboxGroupInput ,
  Toolbar,
  SaveButton
} from "react-admin";
import {
  Card,
  Stack,
  CardContent,
  Box,
  Grid,
  Typography,
  Link,

} from "@mui/material";

const SLAShow = () => {
  const { id } = useParams(); // this component is rendered in the /books/:id path
  const redirect = useRedirect();
  console.log({ id });
  const notify = useNotify();
  const Spacer = () => <Box m={1}>&nbsp;</Box>;
  const { data, isLoading } = useGetOne(
    "VRN",
    { id },

    // redirect to the the mainsearch page if the VRN is not found
    {
      onError: () => {
        redirect("/searchvrn");
        notify(`Error: ${id} not found`);
      },
    }
  );
  if (isLoading) {
    return <div>Loading</div>;
  }

  const CustomerDetails = () => {
    const record = useRecordContext();
    return (
      <div>
        <Typography
          component={RouterLink}
          color="primary"
          to={`/customers/${record?.id}`}
          style={{ textDecoration: "none" }}
        >
          {record?.first_name} {record?.last_name}
        </Typography>
      </div>
    );
  };


  const ReturnButtonToolbar = () => {
    const redirect = useRedirect();
    const notify = useNotify();
    return (
        <Toolbar>
    
            <SaveButton alwaysEnable
                label="BACK"
                mutationOptions={{
                    onSuccess:()=> {
                        
                      redirect("/searchvrn");;
                    }}
                }
                type="button"
                //variant="text"
            />
        </Toolbar>
    );
};
  
  return (
    //embed data and id(from Params) to edit and simple form
    <Edit resource="VRN" id={id}>
      <SimpleForm defaultValues={data}  toolbar={<ReturnButtonToolbar />}>   
        {/* toolbar={false}> */}
        {/* Start Form UI elements: */}
        <div>
          {/* Start SLA information block */}
          <Title title="SLA information" />
          {/* Grid container will take up 100% of the screen width, and on extra large screens, it will take up 800 pixels.  */}
          <Grid container width={{ xs: "100%", xl: 800 }} spacing={2}>
            <Grid item xs={12} md={8} xl={8} >
              <Typography
                variant="h5"
                gutterBottom
                sx={{ marginLeft: "0.5em", fontWeight: "bold" }}
              >
                Vehicle Information
              </Typography>

              {/* <Box p="1em" width={600}> */}
                <Box display={{ xs: "block", sm: "flex" }} >
                <Box flex={1}  >  
                {/* do not set ml onfirst box flex */}
            
                    <TextInput
                      source="VRN"
                      label="Licence Plate"
                      sx={{
                        "& .MuiInputBase-input": {
                          color: "black",
                        },
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "10px", // Adjust as needed
                        },
                        pointerEvents: "none",
                      }}
                      fullWidth
                    />
                  </Box>
                  <Box flex={1} ml="0.5em">
                    <TextInput
                      source="Equipment"
                      label="Equipment"
                      sx={{
                        "& .MuiInputBase-input": {
                          color: "black",
                        },
                        pointerEvents: "none",
                         
                      }}
                      fullWidth
                    />
                  </Box>
                </Box>

                <Box display={{ xs: "block", sm: "flex" }}>
                  <Box flex={1} ml="0.5em" sx={{ marginLeft: "-0.1em" }}>
                    <TextInput
                      source="Dept"
                      label="Department"
                      sx={{
                        "& .MuiInputBase-input": {
                          color: "black",
                        },
                        pointerEvents: "none",
                      }}
                      fullWidth
                    />
                  </Box>
                  <Box flex={1} ml="0.5em">
                    <TextInput
                      source="Type"
                      label="Type"
                      sx={{
                                                "& .MuiInputBase-input": {
                          color: "black",
                        },
                        pointerEvents: "none",
                        fontSize: '10px', // Set the font size
                        fontWeight: 'bold', // Set the font weight
                        fontFamily: 'Arial', // Set the font family
                      }}
                    fullWidth
                    />
                  </Box>
                </Box>

                <Box display={{ xs: "block", sm: "flex" }}>
                  <Box flex={1} ml="0.5em" sx={{ marginLeft: "-0.1em" }}>
                    <TextInput
                      source="Make"
                      label="Make"
                      sx={{
                        "& .MuiInputBase-input": {
                          color: "black",
                        },
                        pointerEvents: "none",
                      }}
                      fullWidth
                    />
                  </Box>
                  <Box flex={1} ml="0.5em">
                    <TextInput
                      source="Model"
                      label="Model"
                      sx={{
                        "& .MuiInputBase-input": {
                          color: "black",
                        },
                        pointerEvents: "none",
                      }}
                      fullWidth
                    />
                  </Box>
                </Box>

               <Spacer />
       

              <Box mt="1em" />

              <Typography
                variant="h5"
                gutterBottom
                sx={{ marginLeft: "0.5em", fontWeight: "bold" }}
              >
                SLA Detail:
              </Typography>


              <Box display={{ xs: "block", sm: "flex" }} >
                <Box flex={1}  >  
                  <TextInput
                    source="SLA_NO"
                    label="SLA NO"
                    sx={{
                      "& .MuiInputBase-input": {
                        color: "black",
                      },
                      pointerEvents: "none",
                    }}
                    fullWidth
                  />
                </Box>
              </Box>

              <Box display={{ xs: "block", sm: "flex" }}>
                  <Box flex={1} ml="0.5em" sx={{ marginLeft: "-0.1em" }}>
                    <TextInput
                      source="SLA_Start"
                      label="SLA Start Date"
                      sx={{
                        "& .MuiInputBase-input": {
                          color: "black",
                        },
                        pointerEvents: "none",
                      }}
                      fullWidth
                    />
                  </Box>
                  <Box flex={1} ml="0.5em">
                    <TextInput
                      source="SLA_END"
                      label="SLA End Date"
                      sx={{
                                                "& .MuiInputBase-input": {
                          color: "black",
                        },
                        pointerEvents: "none",
                        fontSize: '10px', // Set the font size
                        fontWeight: 'bold', // Set the font weight
                        fontFamily: 'Arial', // Set the font family
                      }}
                    fullWidth
                    />
                  </Box>
                </Box>

        
        



                    <Box display={{ xs: "block", sm: "flex" }} >
                    <Box flex={1}  >  
                    <CheckboxGroupInput source="jobs_Included" choices={[
                    { id: 'PM', name: 'PM' },
                    { id: 'CM', name: 'CM' },
                    { id: 'FA', name: 'FA' },

                    ]} />
                    </Box>
                </Box>

                <Box display={{ xs: "block", sm: "flex" }} >
                    <Box flex={1}  >  
                    <CheckboxGroupInput source="Service_Included" choices={[
                    { id: 'Collect_n_Delivery', name: 'Collection & Delivery' },
                    { id: 'Resident_staff', name: 'Resident staff' },
                    { id: 'Supernumerary', name: 'Supernumerary Vehicle' },
                    { id: 'Registry', name: 'Registry Service' },
                    { id: 'Relief', name: 'Relief Vehicle' },
                    ]} />
                    </Box>
                </Box>

                <Box display={{ xs: "block", sm: "flex" }} >
                    <Box flex={1}  >  
                    <CheckboxGroupInput source="Equipment_Included" choices={[
                    { id: 'Fire_Extinguisher', name: 'Fire Extinguisher' },
                   

                    ]} />
                    </Box>
                </Box>

            </Grid>
            

            {/* Third colunm start */}
            <Grid item xs={12} md={4} xl={4}>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ marginLeft: "0.5em", fontWeight: "bold" }}
              >
                Status
              </Typography>
              <Box display={{ xs: "block", sm: "flex" }}>
                <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
                  <TextInput
                    source="Status"
                    label="Status"
                    sx={{
                      "& .MuiInputBase-input": {
                        color: "black",
                      },
                      pointerEvents: "none",
                    }}
                  />
                </Box>
              </Box>
              <Box display={{ xs: "block", sm: "flex" }}>
                <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
                  <TextInput
                    source="Aged"
                    label="Aged?"
                    sx={{
                      "& .MuiInputBase-input": {
                        color: "black",
                      },
                      pointerEvents: "none",
                    }}
                  />
                </Box>
              </Box>
              <Box display={{ xs: "block", sm: "flex" }}>
                <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
                  <TextInput
                    source="Fuel_Type"
                    label="Fuel Type"
                    sx={{
                      "& .MuiInputBase-input": {
                        color: "black",
                      },
                      pointerEvents: "none",
                    }}
                  />
                </Box>
              </Box>
              <Spacer />
   
       <Box mt="3.5em" />
              <Box display={{ xs: "block", sm: "flex" }} >
                    <Box flex={1}  >  
                    <TextInput
                      source="Parts_Ceiliing"
                      label="Parts Over Ceiliing"
                      sx={{
                        "& .MuiInputBase-input": {
                          color: "black",
                        },
                        pointerEvents: "none",
                      }}
                      fullWidth
                    />
                    </Box>
                </Box>
                <Box display={{ xs: "block", sm: "flex" }} >
                    <Box flex={1}  >  
                    <TextInput
                      source="Availiability"
                      label="Availiability"
                      sx={{
                        "& .MuiInputBase-input": {
                          color: "black",
                        },
                        pointerEvents: "none",
                      }}
                      fullWidth
                    />
                    </Box>
                </Box>
            </Grid>
          </Grid>
          {/* end Grid container */}
        </div>
      </SimpleForm>
    </Edit>
  );
};

export default SLAShow;
