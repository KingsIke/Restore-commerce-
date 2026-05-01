import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import React from 'react'


type RadioButtonGroupProps = {
    options: { value: string; label: string }[];
    selectedValue: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};  

export const RadioButtonGroup = ({ options, selectedValue, onChange }: RadioButtonGroupProps) => {
  return (
    <FormControl>
        <RadioGroup value={selectedValue} onChange={onChange} sx={{my:0}}>
        {options.map(({value, label}) => {
            return (
                <FormControlLabel
                    key={value}
                    value={value}
                    control={<Radio color='secondary' sx={{py:0.7}} />}
                    label={label}
                />
            );
        })}
        </RadioGroup>
    </FormControl>
  )
}
