import { Remove, Add, Close } from '@mui/icons-material'
import { Box, Grid, IconButton, Paper, Typography } from '@mui/material'
import type { IBasketItem } from '../../app/model/basket'
import { useAddItemToBasketMutation, useRemoveItemFromBasketMutation } from './basketApi'
import { formatCurrency } from '../../lib/utils'
// import { borderRadius, flex } from '@mui/system'
// import React from 'react'

export type BasketItemProps = {
    item: IBasketItem
}
export const BasketItem = ({item}: BasketItemProps) => {
    const [removeBasketItem] = useRemoveItemFromBasketMutation();
    const [addItemToBasket] = useAddItemToBasketMutation();
  return (
    <Paper sx={{
        height: 140,
        borderRadius: 3,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 2

    }}>
        <Box display='flex' alignItems= 'center'>
            <Box 
                component='img'
                src={item.pictureUrl}
                alt= {item.name}
                sx={{
                    width: 100,
                    height: 100,
                    objectFit: 'cover',
                    borderRadius: '4px',
                    mr: 8,
                    ml:4
                }}
                />
                <Box display='flex' flexDirection='column' gap={1}>
                    <Typography variant='h6'>
                        {item.name}
                    </Typography>
                    <Box display= 'flex' alignItems='center' gap={3}>
                        <Typography sx={{
                            fontSize: '1.1rem'
                        }}>

                        {formatCurrency(item.price)} * {item.quantity}
                        </Typography>
                        
                        <Typography sx={{
                            fontSize: '1.1rem'
                        }} color='primary'>

                        {formatCurrency(item.price * item.quantity)}
                        </Typography>

                    </Box>
                    <Grid container spacing={1} alignItems= 'center'>
                        <IconButton  
                        onClick={() => removeBasketItem({productId: item.productId, quantity: 1})}
                        color='error' size='small' sx={{
                            border: 1, borderRadius: 1
                        }}>
                            <Remove />
                        </IconButton>
                        <Typography variant='h6'>{item.quantity}</Typography>
                        <IconButton 
                        onClick={() => addItemToBasket({product: item, quantity:1})}
                        color='error' size='small' sx={{
                            border: 1, borderRadius: 1
                        }}>
                            <Add />
                        </IconButton>
                    </Grid>

                </Box>
        </Box>
        <IconButton  
        onClick={() => removeBasketItem({productId: item.productId, quantity: item.quantity})}
        
        color='error' size='small' sx={{border:1, borderRadius:1, minWidth: 0, alignSelf: 'start', mr:1, mt:1}}>
            <Close />
        </IconButton>

    </Paper>
  )
}
