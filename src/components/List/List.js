import { Box, Card, Container, Button} from "@mui/material";
import Sidebar from "../../components/Sidebar/Sidebar";
import {DataGrid} from "@mui/x-data-grid";
import Grid2 from "@mui/material/Unstable_Grid2";


const columns = [
    {field: 'id', headerName: 'ID', width: 70},
    {
        field: 'status', headerName: 'Status', width: 120,
        renderCell: (params) => {
            return (
                <Grid2 container alignItems={'center'}
                       component={'span'}
                       sx={{
                           width: '100%',
                           height: 'auto',
                           textAlign: 'center',
                           borderRadius: '15px',
                           color: params.row.status === 'Approved' ? '#5dd931' : params.row.status === 'Pending' ? '#FCE65F' : '#cb4949',
                           bgcolor: params.row.status === 'Approved' ? 'rgba(0,128,0,0.2)' : params.row.status === 'Pending' ? 'rgba(255,217,0,0.2)' : 'rgba(255,0,0,0.2)',
                           display: 'inline-block',
                           mr: 1,
                       }}>
                    {params.row.status}
                </Grid2>
            );
        },
    },
    {field: 'vendor', headerName: 'Vendor', width: 120},
    {field: 'purchase_date', headerName: 'Purchase Date', width: 120},
    {field: 'delivery_date', headerName: 'Delivery Date', width: 120},
    {field: 'method', headerName: 'Shipping Method', width: 130},
    {field: 'quantity', headerName: 'Quantity', width: 120},
    {field: 'price', headerName: 'Price', width: 120},
    {field: 'item', headerName: 'Item', width: 120,},
    {field: 'unit_cost', headerName: 'Unit Cost', width: 120},
    {field: 'line_total', headerName: 'Line Total', width: 120},
];

const rows = [
    {
        id: 1,
        status: 'Approved',
        vendor: 'Bench',
        purchase_date: '10-4-2022',
        delivery_date: '10-22-2022',
        method: 'ground',
        quantity: 20,
        price: '1,500.00',
        item: 'Martins',
        unit_cost: '500.00',
        line_total: '30,000.00'
    },
    {
        id: 2,
        status: 'Pending',
        vendor: 'Bench',
        purchase_date: '10-4-2022',
        delivery_date: '10-22-2022',
        method: 'ground',
        quantity: 25,
        price: '1,000.00',
        item: 'Adam K',
        unit_cost: '300.00',
        line_total: '25,000.00'
    },
    {
        id: 3,
        status: 'Approved',
        vendor: 'Bench',
        purchase_date: '10-4-2022',
        delivery_date: '10-22-2022',
        method: 'air',
        quantity: 25,
        price: '2,500.00',
        item: 'Fossil',
        unit_cost: '800.00',
        line_total: '62,500.00'
    },
    {
        id: 4,
        status: 'Back Ordered',
        vendor: 'Bench',
        purchase_date: '10-4-2022',
        delivery_date: '10-22-2022',
        method: 'pickup',
        quantity: 25,
        price: '3,000.00',
        item: 'G-Shock',
        unit_cost: '700.00',
        line_total: '75,000.00'
    },
    {
        id: 5,
        status: 'Approved',
        vendor: 'Bench',
        purchase_date: '10-4-2022',
        delivery_date: '10-22-2022',
        method: 'ground',
        quantity: 25,
        price: '3,700.00',
        item: 'Maurice',
        unit_cost: '600.00',
        line_total: '92,500.00'
    },
    {
        id: 6,
        status: 'Pending',
        vendor: 'Bench',
        purchase_date: '10-4-2022',
        delivery_date: '10-22-2022',
        method: 'ground',
        quantity: 20,
        price: '1,500.00',
        item: 'Martins',
        unit_cost: '500.00',
        line_total: '30,000.00'
    },
    {
        id: 7,
        status: 'Approved',
        vendor: 'Bench',
        purchase_date: '10-4-2022',
        delivery_date: '10-22-2022',
        method: 'pickup',
        quantity: 25,
        price: '1,000.00',
        item: 'Adam K',
        unit_cost: '300.00',
        line_total: '25,000.00'
    },
    {
        id: 8,
        status: 'Back Ordered',
        vendor: 'Bench',
        purchase_date: '10-4-2022',
        delivery_date: '10-22-2022',
        method: 'ground',
        quantity: 25,
        price: '2,500.00',
        item: 'Fossil',
        unit_cost: '800.00',
        line_total: '62,500.00'
    },
    {
        id: 9,
        status: 'Approved',
        vendor: 'Bench',
        purchase_date: '10-4-2022',
        delivery_date: '10-22-2022',
        method: 'pickup',
        quantity: 25,
        price: '3,000.00',
        item: 'G-Shock',
        unit_cost: '700.00',
        line_total: '75,000.00'
    },
    {
        id: 10,
        status: 'Approved',
        vendor: 'Bench',
        purchase_date: '10-4-2022',
        delivery_date: '10-22-2022',
        method: 'ground',
        quantity: 25,
        price: '3,700.00',
        item: 'Maurice',
        unit_cost: '600.00',
        line_total: '92,500.00'
    }, {
        id: 11,
        status: 'Pending',
        vendor: 'Bench',
        purchase_date: '10-4-2022',
        delivery_date: '10-22-2022',
        method: 'ground',
        quantity: 20,
        price: '1,500.00',
        item: 'Martins',
        unit_cost: '500.00',
        line_total: '30,000.00'
    },
    {
        id: 12,
        status: 'Approved',
        vendor: 'Bench',
        purchase_date: '10-4-2022',
        delivery_date: '10-22-2022',
        method: 'air',
        quantity: 25,
        price: '1,000.00',
        item: 'Adam K',
        unit_cost: '300.00',
        line_total: '25,000.00'
    },
    {
        id: 13,
        status: 'Approved',
        vendor: 'Bench',
        purchase_date: '10-4-2022',
        delivery_date: '10-22-2022',
        method: 'ground',
        quantity: 25,
        price: '2,500.00',
        item: 'Fossil',
        unit_cost: '800.00',
        line_total: '62,500.00'
    },
    {
        id: 14,
        status: 'Back Ordered',
        vendor: 'Bench',
        purchase_date: '10-4-2022',
        delivery_date: '10-22-2022',
        method: 'ground',
        quantity: 25,
        price: '3,000.00',
        item: 'G-Shock',
        unit_cost: '700.00',
        line_total: '75,000.00'
    },
    {
        id: 15,
        status: 'Approved',
        vendor: 'Bench',
        purchase_date: '10-4-2022',
        delivery_date: '10-22-2022',
        method: 'air',
        quantity: 25,
        price: '3,700.00',
        item: 'Maurice',
        unit_cost: '600.00',
        line_total: '92,500.00'
    },
];


const List = ({customInputLabelStyles}) => {

    const actionColumn = [{
        field: 'action', headerName: 'Action', width: 180, renderCell: (params) => (
            <Box>
                <Button sx={{gap: 10, mr: '25px', color: '#d35bc1', border: '1px solid #BBE166', height: 'auto'}}
                        to={`/edit/${params.row.id}`} className="btn btn-primary btn-sm">Edit</Button>
                <Button sx={{gap: 10, color: '#ef3f3f', border: '1px solid #D64545', height: 'auto'}}
                        to={`/delete/${params.row.id}`} className="btn btn-danger btn-sm">Delete</Button>
            </Box>
        )
    }];

    return (

        <Container disableGutters maxWidth={'false'} sx={{display: 'flex', margin: 0}}>
            <Sidebar/>

            <Card sx={{height: '100vh', width: '100vw', p: 3}}>
                <DataGrid
                    rows={rows}
                    columns={columns.concat(actionColumn)}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    checkboxSelection

                    sx={{
                        height: '70vh',
                        width: '100%',
                        bgcolor: '#194775',
                        boxShadow: '10px 10px 10px 10px lightgrey',
                        borderRadius: '10px',
                        color: '#909090',
                        textAlign: 'center',
                    }}
                />
            </Card>
        </Container>
    );
}


export default List;