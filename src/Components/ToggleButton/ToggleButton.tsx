import React from 'react';
import {ToggleButton as Togglebutton, ToggleButtonGroup} from "@mui/material";
import {RemoveRedEye, Code} from '@mui/icons-material';
import {useAppDispatch} from "../../Store/Store";
import {setIsConstructed} from "../../Store/Slices/AppSlice";

const ToggleButton = () => {
    const [alignment, setAlignment] = React.useState('Constructor');

    const dispatch = useAppDispatch()

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        dispatch(setIsConstructed())
        setAlignment(newAlignment);
    };

    return (
        <>
            <ToggleButtonGroup
                color="standard"
                value={alignment}
                exclusive
                onChange={handleChange}
                sx={{mb: 3}}
            >
                <Togglebutton value="Runtime" >
                    <RemoveRedEye sx={{mr: 1}} color={alignment === "Runtime" ? "primary" : "disabled"}/>
                    Runtime
                </Togglebutton>
                <Togglebutton value="Constructor">
                    <Code sx={{mr: 1}} color={alignment === "Constructor" ? "primary" : "disabled"}/>
                    Constructor
                </Togglebutton>
            </ToggleButtonGroup>
        </>
    );
};

export default ToggleButton;