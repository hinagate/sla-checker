import { useParams,Link as RouterLink } from 'react-router-dom';
import { useGetOne, useRedirect, Title,useNotify,Form, Labeled,NumberField,useRecordContext, TextInput,TextField, SimpleForm, Edit,CheckboxGroupInput } from 'react-admin';
import { Card,Stack, CardContent, Box, Grid, Typography, Link } from '@mui/material';

/**
 * Fetch a book from the API and display it
 */
const SLAEdit = () => {
    const { id } = useParams(); // this component is rendered in the /books/:id path
    const redirect = useRedirect();
    console.log({id});
    const notify = useNotify();
    const Spacer = () => <Box m={1}>&nbsp;</Box>;
    const { data, isLoading } = useGetOne(
        'VRN',
        { id },
        
        // redirect to the the mainsearch page if the VRN is not found
        { onError: () =>
            {
            redirect('/searchvrn')
            notify(`Error: ${id} not found`);    
        }
        }
    );
    if (isLoading) { return <div>Loading</div>; }


    const CustomerDetails = () => {
        const record = useRecordContext();
        return (
            <div>
                <Typography
                    component={RouterLink}
                    color="primary"
                    to={`/customers/${record?.id}`}
                    style={{ textDecoration: 'none' }}
                >
                    {record?.first_name} {record?.last_name}
                </Typography>
                </div>
      );
    };

    return (
        <Edit resource="VRN" id={id} >           
                <SimpleForm defaultValues={data}>
         <div>
          
             <Box maxWidth="50em">
                {/* <Card>
                    <CardContent> */}

                 
        
            <Title title="SLA information"/>
            <Typography variant="h5" gutterBottom sx={{ marginLeft: '1em' }}>Vehicle Information</Typography>
            <Card  sx={{ margin: 'auto' }}>
                
                   
                
                       <Grid container spacing={2}>
                       
                       <Grid item xs={6} sm={12} md={6}  >
                           
                            <Typography variant="body1" sx={{ marginLeft: '1em' }}>Licence Plate:</Typography> {/* Here we add a left margin */}
                            <Typography variant="h6" sx={{ marginLeft: '0.8em' }}>{data.VRN}</Typography>
                            
                        </Grid>
                                <Grid item xs={12} sm={12} md={6}>
                                    <Typography variant="body1" sx={{ marginLeft: '1em' }}>Equipment:</Typography> {/* Here we add a left margin */}
                                    <Typography variant="h6" sx={{ marginLeft: '0.8em' }}>{data.Equipment}</Typography>
                                </Grid>
                                
               
                        <Spacer />
           
                        
                 
                   
                        </Grid>
            </Card>
            <Box mt={4}/>
            <Typography variant="h5" gutterBottom sx={{ marginLeft: '1em' }}>SLA Information</Typography>
            <Card  sx={{ margin: 'auto' }}>

            <Grid item xs={6} sm={12} md={6}>
       
                              <Typography variant="body1" sx={{ marginLeft: '1em' }}>Parts Ceiliing:</Typography> 
                          <Typography variant="h6" sx={{ marginLeft: '0.8em' }}>${data.Parts_Ceiliing}</Typography>
                     
</Grid>

            </Card>
            <Box mt={4}/>
            <Typography variant="h5" gutterBottom sx={{ marginLeft: '1em' }}>Remarks/Special Services</Typography>

            <Card  sx={{ margin: 'auto' }}>

<Grid item xs={6} sm={12} md={6}>
<Typography variant="body1" sx={{ marginLeft: '1em' }}>Parts Ceiliing:</Typography> 
<TextInput source="" />
</Grid>
           </Card>


         </Box>
         </div>
         </SimpleForm>
         </Edit>

    );
};



export default SLAEdit