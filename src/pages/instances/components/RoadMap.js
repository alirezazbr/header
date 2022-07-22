import React from 'react';
import { Box, Grid } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { translate } from '../../../i18n';

const RoadMap = () => {
    const location = useLocation();
    const { pathname } = location || { pathname: '' };
    const instancePages = [
        {title: translate('instanceLocation'), path: 'location'},
        {title: translate('instanceType'), path: 'type'},
        {title: translate('instancePlan'), path: 'plan'},
        {title: translate('authentication'), path: 'auth'},
        {title: translate('finalize'), path: 'finalize'},
    ];

    return (
        <Box component={'div'}>
            <Grid item display={'flex'} flexDirection={'column'} sx={{
                minWidth: 'calc(100% - 440px)',
                width: 'fit-content',
                m: '0 auto',
                height: '70px',
            }}>
                <Grid item xs={12} display={'flex'} flexDirection={'row'}>
                    {
                        instancePages.map(({ path }, index) => (
                            <Box key={path} component={'div'} sx={{ position: 'relative', display: 'flex', justifyContent: 'center', p: '10px 0', alignItems: 'center', flex: 1 }}>
                                <Box component={'div'} style={{
                                    width: 'calc(50% - 30px)', 
                                    height: '3px',
                                    borderRadius: '0 3px 3px 0',
                                    backgroundColor: '#d1effd', 
                                    position: 'absolute', 
                                    left: 0,
                                    display: (index === 0) ? 'none' : 'initial',
                                }} />
                                <Grid item display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{
                                    width: '25px',
                                    height: '25px',
                                    borderRadius: '50%',
                                    backgroundColor: (pathname.includes(path)) ? '#fac802' : '#d1effe',
                                }}>
                                    <Grid item sx={{
                                        width: '15px',
                                        height: '15px',
                                        borderRadius: '50%',
                                        backgroundColor: (pathname.includes(path)) ? '#ffffff' : '#52c7fc',
                                    }}/>
                                </Grid>
                                <Box component={'div'} style={{
                                    width: 'calc(50% - 30px)', 
                                    height: '3px',
                                    borderRadius: '3px 0 0 3px',
                                    backgroundColor: '#d1effd', 
                                    position: 'absolute', 
                                    right: 0,
                                    display: (index === instancePages.length - 1) ? 'none' : 'initial',
                                }} />
                            </Box>
                        ))
                    }
                </Grid>
                <Grid item xs={12} display={'flex'} flexDirection={'row'}>
                    {
                        instancePages.map(({ title, path }) => (
                            <Grid key={path} item display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{
                                flex: 1,
                                color: (pathname.includes(path)) ? '#0d2d51' : '#747577',
                                fontWeight: (pathname.includes(path)) ? '600': '400',
                            }}>
                                {title}
                            </Grid>
                        ))
                    }
                </Grid>
            </Grid>
        </Box>
    );
};

export default RoadMap;
