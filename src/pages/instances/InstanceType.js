import React, { useState } from 'react';
import { styled } from '@mui/system';
import { Box, Grid, Typography, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

import { translate } from '../../i18n';
import { Container } from '../../components';
import { RoadMap, NavigationButton } from './components';

// images
import tick from '../../assets/images/tick.png';
import kali from '../../assets/images/kali.jpg';
import centos from '../../assets/images/centos.png';
import ubuntu from '../../assets/images/ubuntu.png';
import fedora from '../../assets/images/fedora.jpg';
import freeBsd from '../../assets/images/freebsd.png';
import windows from '../../assets/images/windows.jpg';
import winServer from '../../assets/images/win_server.jpg';


const InstanceLocation = () => {
    const [selectedCountry, setSelectedCountry] = useState(0);

    const countries = [
        {
            src: ubuntu,
            name: translate('ubuntu'),
            options: ['21.04', '20.10', '19.10', '19.04'],
        },
        {
            src: centos,
            name: translate('centos'),
            options: ['7.7', '7.6', '7.5', '7.4'],
        },
        {
            src: fedora,
            name: translate('fedora'),
            options: ['32', '31', '30', '29'],
        },
        {
            src: freeBsd,
            name: translate('freeBsd'),
            options: ['11.03', '11.02', '11.01', '11.0'],
        },
        {
            src: winServer,
            name: translate('winServer'),
            options: ['2019', '2016', '2012', '2008'],
        },
        {
            src: windows,
            name: translate('winServer'),
            options: ['2019', '2016', '2012', '2008'],
        },
        {
            src: kali,
            name: translate('kaliLinux'),
            options: ['2019.4', '2019.3', '2019.2', '2019.1a'],
        },
        {
            src: ubuntu,
            name: translate('ubuntu'),
            options: ['21.04', '20.10', '19.10', '19.04'],
        },
        {
            src: centos,
            name: translate('centos'),
            options: ['7.7', '7.6', '7.5', '7.4'],
        },
        {
            src: fedora,
            name: translate('fedora'),
            options: ['32', '31', '30', '29'],
        },
        {
            src: freeBsd,
            name: translate('freeBsd'),
            options: ['11.03', '11.02', '11.01', '11.0'],
        },
        {
            src: winServer,
            name: translate('winServer'),
            options: ['2019', '2016', '2012', '2008'],
        },
        {
            src: windows,
            name: translate('winServer'),
            options: ['2019', '2016', '2012', '2008'],
        },
        {
            src: kali,
            name: translate('kaliLinux'),
            options: ['2019.4', '2019.3', '2019.2', '2019.1a'],
        },
    ];
    return (
        <Container>
            <RoadMap />
            <Typography variant={'h5'} sx={{ fontWeight: '600', color: '#0d2d51', mt: '70px', ml: '10px' }}>Instance Type</Typography>

            <Box component={'div'}>
                <CountriesWrapper container display={'flex'}>
                {
                        countries.map(({ src, name, options }, index) => (
                            <Grid key={`${name}-${index}`} item xs={3} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} sx={{
                                height: '215px',
                                p: '10px',
                                borderRadius: '7px',
                                minWidth: '215px',
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
                                        <img src={src} alt={name} style={{ width: '45px', height: '45px', marginTop: '30px' }} />
                                    </Grid>
                                    <Grid item xs={12} display={'flex'} alignItems={'center'}>
                                        <Typography variant={'h6'}>{name}</Typography>
                                    </Grid>
                                    <Grid item xs={12} display={'flex'} alignItems={'center'}>
                                        <Typography variant={'body1'} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  fontSize: '12px' }}>
                                            <img src={tick} alt="tick" style={{ width: '15px', height: '15px', marginRight: '5px' }} />
                                            <span style={{ fontWeight: '600', marginRight: '3px' }}>{translate('allX64')}</span>
                                            <span style={{ fontWeight: '100' }}>{translate('systemType')}</span>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} display={'flex'} alignItems={'center'}>
                                        <FormControl size="small" sx={{
                                            m: 1,
                                            minWidth: 170,
                                            pointerEvents: (index !== selectedCountry) ? 'none' : 'initial',
                                            opacity: (index !== selectedCountry) ? '0.5' : '1',
                                        }}>
                                            <InputLabel id="demo-select-small" sx={{ fontSize: '15px', color: '#D7D4D7' }}>{translate('selectVersion')}</InputLabel>
                                            <Select
                                                labelId="demo-select-small"
                                                id="demo-select-small"
                                                // value={value}
                                                label={translate('selectVersion')}
                                                // onChange={({ target }) => setValue(target.value)}
                                            >
                                                {
                                                    options.map((item) => (
                                                        <MenuItem value={item}>{item}</MenuItem>
                                                    ))
                                                }
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Grid>
                        ))
                    }
                </CountriesWrapper>
            </Box>

            <NavigationButton />
        </Container>
    );
};

export default InstanceLocation;

const CountriesWrapper = styled(Grid)(({ theme }) => ({
    flexWrap: 'wrap',
    height: '430px',
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
