import React from 'react';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { Grid, Button } from '@mui/material';
import { ChevronRight, ChevronLeft } from '@mui/icons-material';

import { translate } from '../../../i18n';

const NavigationButton = ({ firstStep, lastStep, path = '' }) => {
    const navigate = useNavigate();

    return (
        <Grid item xs={12} display={'flex'} justifyContent={'space-between'} flexDirection={'row'} sx={{ position: 'absolute', width: 'calc(100% - 130px)', bottom: '60px' }}>
            <NavigateBtn variant="contained" startIcon={<ChevronLeft />} onClick={() => navigate(-1)} sx={{ visibility: firstStep && 'hidden' }}>
                {translate('prevStep')}
            </NavigateBtn>
            
            <NavigateBtn variant="contained" endIcon={<ChevronRight />} onClick={() => navigate(path)} sx={{ visibility: lastStep && 'hidden' }}>
                {translate('nextStep')}
            </NavigateBtn>
        </Grid>
    );
};

const NavigateBtn = styled(Button)(({ theme }) => ({
    width: '125px',
    height: '41px',
    mt: '5px',
    color: '#0d2d51',
    fontSize: '11px',
    fontWeight: '600',
    backgroundColor: '#fac802',
    boxShadow: 'none',
    textTransform: 'capitalize',
  }));

export default NavigationButton;
