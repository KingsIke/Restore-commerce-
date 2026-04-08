import {
  Box,
  Button,
  Divider,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { formatCurrency } from "../../lib/utils";
import { useGetBasketQuery } from "../../features/basket/basketApi";
import type { IBasketItem } from "../../app/model/basket";
import { Link } from "react-router";

export const OrderSummary = () => {
  const { data: basket } = useGetBasketQuery();
  const subtotal =
    basket?.items.reduce(
      (sum: number, item: IBasketItem) => sum + item.price * item.quantity,
      0,
    ) ?? 0;
  const deliveryFee = subtotal > 10000 ? 0 : 500;

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      maxWidth="lg"
      mx="auto"
    >
      <Paper
        sx={{
          width: "100%",
          p: 3,
          mb: 2,
          borderRadius: 3,
        }}
      >
        <Typography variant="h6" component="p" fontWeight="bold">
          Order Summary
        </Typography>
        <Typography variant="body2" sx={{ fontStyle: "italic" }}>
          Order over $100 qualifies for free delivery!
        </Typography>
        <Box mt={2}>
          <Box display="flex" justifyContent="space-between" mb={1}>
            <Typography color="textSecondary">Subtotal</Typography>
            <Typography>{formatCurrency(subtotal)}</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" mb={1}>
            <Typography color="textSecondary">Discount</Typography>
            <Typography color="success">-$0.00</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" mb={1}>
            <Typography color="textSecondary">Delivery Fee</Typography>
            <Typography>{formatCurrency(deliveryFee)}</Typography>
          </Box>
          <Divider sx={{ my: 2 }} />
          <Box display="flex" justifyContent="space-between" mb={1}>
            <Typography color="textSecondary">Total</Typography>
            <Typography variant="h6">
              {formatCurrency(subtotal + deliveryFee)}
            </Typography>
          </Box>
        </Box>
        <Box mt={2}>
          <Button 
          component={Link}
          to="/checkout"
          variant="contained" 
          color="primary" 
          fullWidth sx={{ mb: 1 }}>
            Checkout
          </Button>
          <Button 
          component={Link}
          to="/catalog"
          fullWidth>
            Continue Shopping</Button>
        </Box>
      </Paper>

      <Paper
        sx={{
          width: "100%",
          p: 3,
          borderRadius: 3,
        }}
      >
        <form>
          <Typography variant="subtitle1" component="label">
            Do you have a promo code?
          </Typography>
          <TextField
            label="voucher code"
            variant="outlined"
            fullWidth
            sx={{ my: 2 }}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Apply Promo Code
          </Button>
        </form>
      </Paper>
    </Box>
  );
};
