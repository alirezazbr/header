import React, { useState } from 'react';
import { styled } from '@mui/system';
import ReactCountryFlag from "react-country-flag";
import { Box, Grid, Typography } from '@mui/material';

import { translate } from '../../i18n';
import { Container } from '../../components';
import { RoadMap, NavigationButton } from './components';

const InstanceLocation = () => {
    const [selectedCountry, setSelectedCountry] = useState(0);

    const countries = [
        {
            iso: 'SG',
            countryName: translate('singapore'),
        },
        {
            iso: 'Us',
            countryName: translate('losAngeles'),
        },
        {
            iso: 'US',
            countryName: translate('dallas'),
        },
        {
            iso: 'FR',
            countryName: translate('paris'),
        },
        {
            iso: 'DE',
            countryName: translate('germany'),
        },
        {
            iso: 'US',
            countryName: translate('newYork'),
        },
        {
            iso: 'US',
            countryName: translate('buffalo'),
        },
        {
            iso: 'FR',
            countryName: translate('roubaix'),
        },
        {
            iso: 'SG',
            countryName: translate('singapore'),
        },
        {
            iso: 'Us',
            countryName: translate('losAngeles'),
        },
        {
            iso: 'US',
            countryName: translate('dallas'),
        },
        {
            iso: 'FR',
            countryName: translate('paris'),
        },
        {
            iso: 'DE',
            countryName: translate('germany'),
        },
        {
            iso: 'US',
            countryName: translate('newYork'),
        },
        {
            iso: 'US',
            countryName: translate('buffalo'),
        },
        {
            iso: 'FR',
            countryName: translate('roubaix'),
        },
    ];

    return (
        <Container>
            <RoadMap />
            <Typography variant={'h5'} sx={{ fontWeight: '600', color: '#0d2d51', mt: '70px', ml: '10px' }}>Instance Location</Typography>

            <Box component={'div'}>
                <CountriesWrapper container display={'flex'}>
                    {
                        countries.map(({ iso, countryName }, index) => (
                            <Grid key={`${countryName}-${index}`} item xs={3} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} sx={{
                                height: '155px',
                                p: '10px',
                                borderRadius: '7px',
                                minWidth: '200px',
                            }}>
                                <Grid item xs={12} display={'flex'} alignItems={'center'} flexDirection={'column'}
                                    onClick={() => setSelectedCountry(index)}
                                    sx={{
                                        width: '100%',
                                        borderRadius: '7px',
                                        backgroundColor: '#ffffff',
                                        border: (index === selectedCountry) ? '3px solid #2c5eff' : 'none',
                                        boxShadow: (index === selectedCountry) ? '0px 0px 0px 3px #e3eefe' : 'none',
                                        cursor: 'pointer',
                                    }}
                                >
                                    <Grid item xs={12} display={'flex'} alignItems={'center'} >
                                        <ReactCountryFlag
                                            countryCode={iso}
                                            svg
                                            cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                                            cdnSuffix="svg"
                                            style={{
                                                width: "3.2em",
                                                height: "3.2em",
                                                margin: '20px 0 0',
                                                borderRadius: "50%",
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} display={'flex'} alignItems={'center'}>{countryName}</Grid>
                                </Grid>
                            </Grid>
                        ))
                    }
                </CountriesWrapper>
            </Box>

            <NavigationButton firstStep path={'/main/instances/type'} />
        </Container>
    );
};

export default InstanceLocation;

const CountriesWrapper = styled(Grid)(({ theme }) => ({
    flexWrap: 'wrap',
    height: '310px',
    overflowX: 'auto',
    '&::-webkit-scrollbar': {
        width: '0.4em',
        backgroundColor: '#e9f1f6',
        borderRadius: '7px',

    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#dfe7ec',
        borderRadius: '7px',
    }
  }));
