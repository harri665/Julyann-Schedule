import * as React from 'react';
import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Box from '@mui/joy/Box';
import Slider, { sliderClasses } from '@mui/joy/Slider';
import { CssVarsProvider } from '@mui/joy/styles';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Avatar from '@mui/joy/Avatar';

export default function Day(props:any) {
    const test = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    return(
        <div className='day'>
            <CssVarsProvider>
                <List
                    variant="outlined"
                    sx={{
                        "--list-gap":"0px",
                        "--List-item-minHeight": "3px",
                        "--List-item-paddingY": "0px",
                        "--List-item-paddingX": "12px",
                        "--List-decorator-size": "32px",
                        "--List-divider-gap": "1px"
                    }}
                >
                    {test.map((value)=>
                        <ListItem>
                            <ListItemDecorator sx={{ alignSelf: 'flex-start' }}>
                                <Avatar size="sm" src="/static/images/avatar/1.jpg" />
                            </ListItemDecorator>
                            {value}
                        </ListItem>
                    )}
                </List>
            </CssVarsProvider>
        </div>
    );
}