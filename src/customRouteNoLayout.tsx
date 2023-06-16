import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import { Card, TextField, Button, Stack, MenuItem } from "@mui/material";
import { useGetList,useGetOne,useRedirect, useGetRecordId,useShowContext,useNotify,useRecordContext,Form,TextInput,SaveButton,ToolbarProps, required } from 'react-admin';
import { useParams, useNavigate } from "react-router-dom";
import { useFormState, useForm } from 'react-hook-form';
import { findId } from './types';


const CustomRouteNoLayout = ({ title = 'Posts' })  => {
    // const { isLoading, total } = useGetList('posts', {
    //     pagination: { page: 0, perPage: 10 },
    //     sort: { field: 'id', order: 'ASC' },
    // });
    const record = useRecordContext();
    //const { isLoading } = useShowContext();
    
    //const recordId = useGetRecordId();
    //using   {`Current record id: ${recordId}`}
    
    const { data, isLoading, error, refetch } = useGetOne(
        'posts',
        { id: 1}, 
        
       
      
    );

    const navigate = useNavigate();
    const { id } = useParams();

    // function handleClick() {
    //   navigate("/posts");
    // }

    const HandleSubmitButton = () => {
        return (
           <Button variant="contained" type="submit">Check</Button>
           );
    }
 
    const ReviewEditToolbar = (props: ToolbarProps) => {
            const { resource} = props;
            const redirect = useRedirect();
            const { isValid } = useFormState();
            const notify = useNotify();
            const record = useRecordContext<findId>(props);
            const { register, handleSubmit } = useForm();
    
    return (
        <Toolbar
        sx={{
            backgroundColor: 'background.paper',
            display: 'flex',
            justifyContent: 'space-between',
            minHeight: { sm: 0 },
            
        }}
        >
        <HandleSubmitButton/>
         </Toolbar>
           
           );
    };
    
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (!newIdentity) return;
    //     fetch('/update_identity', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ identity: newIdentity })
    //     }).then(() => { 
    //         // call authProvider.getIdentity() again and notify the listeners of the result,
    //         // including the UserMenu in the AppBar
    //         refetch();
    //      });
    // };
    const redirect = useRedirect();

    const onSubmit = (data:any) => {
        console.log(data); // Logs the title field value
        redirect('edit', 'VRN', data.VRN.toUpperCase());
        
    };

    // const handleSubmit = (value:any) => {
    //          value.preventDefault();
             
    //         };
    
 
    return (
        <div>
            <h1>{title}</h1>    
            {/* {isLoading ? (
                <p className="app-loader">Loading...</p>
            ) : (
                <p>
                    Found <span className="total">{data?.title}</span> posts !
                    
                </p>
                
            )} */}
                    <Form onSubmit={onSubmit}> 
                        {/* onSubmit={handleSubmit} */}
                   <TextInput  source="VRN" label="Enter License Plate"  validate={required()}/> 
                   
                   <ReviewEditToolbar/>
               
                  
                  
                    </Form>
          
      {/* <Button variant="contained" color="primary" onClick={handleClick}>
                Go to Posts
            </Button> */}
            
        </div>
    );
};

export default CustomRouteNoLayout;
