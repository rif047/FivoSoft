import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}



function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box>
            <Box>
                <Tabs value={value} onChange={handleChange}>
                    <Tab className='border border-slate-600 text-red-200' label="Who We Are?" {...a11yProps(0)} />
                    <Tab label="How We Works?" {...a11yProps(1)} />
                    <Tab label="Why FivoSoft?" {...a11yProps(2)} />
                </Tabs>
            </Box>

            <TabPanel className='' value={value} index={0}>
                We are IT experts working with different technology for many years. We optimize your products and assets by sharing our expertise and passion for the digital scenes.
            </TabPanel>
            <TabPanel value={value} index={1}>
                It is very simple. To create a new project, just go to the project proposal page and fill up the form. We will review your requirement provided through quote and will be in touch to discuss in detail
            </TabPanel>
            <TabPanel value={value} index={2}>
                We tend to make our own platform where we can ensure our customer’s satisfaction from our own. We will value your time and money. We remain by your side, driving and engaging customers for even better results.
            </TabPanel>
        </Box>
    );
}