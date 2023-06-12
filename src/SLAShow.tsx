import { useParams } from 'react-router-dom';
import { useGetOne, useRedirect, Title } from 'react-admin';
import { Card, Stack, Typography } from '@mui/material';

/**
 * Fetch a book from the API and display it
 */
const SLAShow = () => {
    const { id } = useParams(); // this component is rendered in the /books/:id path
    const redirect = useRedirect();
    console.log({id});
    const { data, isLoading } = useGetOne(
        'VRN',
        { id },
        // redirect to the list if the book is not found
        { onError: () => redirect('/posts') }
    );
    if (isLoading) { return <div>Loading</div>; }
    return (
        <div>
            <Title title="Book Show"/>
            <Card>
                <Stack spacing={1}>
                    <div>
                        <Typography variant="caption" display="block">Title</Typography>
                        <Typography variant="body2">{data.SLA_NO}</Typography>
                    </div>
                    <div>
                        <Typography variant="caption" display="block">Publication Date</Typography>
                        {/* <Typography variant="body2">{new Date(data.published_at).toDateString()}</Typography> */}
                    </div>
                </Stack>
            </Card>
        </div>
    );
};



export default SLAShow