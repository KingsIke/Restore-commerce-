import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { useEffect, useState } from 'react';

type CheckboxButtonsProps = {
  items: string[];
  checked: string[];
  onChange: (items: string[]) => void;
};

export const CheckboxButtons = ({ items, checked, onChange }: CheckboxButtonsProps) => {
  const [checkedItems, setCheckedItems] = useState(checked);

  useEffect(() => {
    setCheckedItems(checked);
  }, [checked]);

  const handleToggle = (value: string) => {
    const updatedChecked = checkedItems.includes(value)
      ? checkedItems.filter(item => item !== value)
      : [...checkedItems, value];
    setCheckedItems(updatedChecked);
    onChange(updatedChecked);
  };

  return (
    <FormGroup>
      {items.map(item => (
        <FormControlLabel
          key={item}
          control={
            <Checkbox
              color="secondary"
              sx={{ py: 0.7, fontSize: 40 }}
              checked={checkedItems.includes(item)}
              onChange={() => handleToggle(item)}
            />
          }
          label={item}
        />
      ))}
    </FormGroup>
  );
};
