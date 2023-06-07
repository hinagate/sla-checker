import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import { Card, TextField, Button, Stack, MenuItem } from "@mui/material";
import { useGetList,useRedirect,useNotify,useRecordContext,Form,TextInput,SaveButton,ToolbarProps } from 'react-admin';
import { useNavigate } from "react-router-dom";
import { useFormState } from 'react-hook-form';
import { findId } from './types';


const CustomRouteNoLayout = ({ title = 'Posts' })  => {
    const { isLoading, total } = useGetList('posts', {
        pagination: { page: 0, perPage: 10 },
        sort: { field: 'id', order: 'ASC' },
    });

    const navigate = useNavigate();

    function handleClick() {
      navigate("/posts");
    }

    const HandleSubmitButton = () => {
        return (
           <Button variant="contained" type="submit">Check</Button>
           );
    }
 
    const ReviewEditToolbar = (props: ToolbarProps) => {
            const { resource, saving } = props;
            const redirect = useRedirect();
            const { isValid } = useFormState();
            const notify = useNotify();
            const record = useRecordContext<findId>(props);
    
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

 
    return (
        <div>
            <h1>{title}</h1>    
            {isLoading ? (
                <p className="app-loader">Loading...</p>
            ) : (
                <p>
                    Found <span className="total">{total}</span> posts !
                </p>
                
            )}
                    <Form> 
                   <TextInput  source="id" label="License Plate"  /> <ReviewEditToolbar/>
                   
                  
                  
                    </Form>
          
      {/* <Button variant="contained" color="primary" onClick={handleClick}>
                Go to Posts
            </Button> */}
            
        </div>
    );
};

export default CustomRouteNoLayout;
