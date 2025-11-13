import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import type { IProduct } from "../../app/model/product";

type ProductCardProps = {
  product: IProduct;
};
export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card 
    elevation={3}
    sx={{
        width: 280,
        borderRadius: 2,
        display:"flex",
        flexDirection: "column",
        justifyContent: "space-between"
    }}
    >
      <CardMedia
        sx={{ height: 200, backgroundSize: "cover" }}
        image={product.pictureUrl}
        title={product.name}
      ></CardMedia>
      <CardContent>
        <Typography
          gutterBottom
          variant="subtitle2"
          sx={{ textTransform: "uppercase" }}
        >
          {product.name}
        </Typography>
        <Typography 
        variant="h6" 
        sx={{ color:"secondary.main" }}
        >
          ${(product.price / 100).toFixed(2)}
        </Typography>
      </CardContent>
      <CardActions
        sx={{ justifyContent: "space-between"}}>
        <Button size="small">Add to cart</Button>
        <Button size="small">View</Button>
      </CardActions>
    </Card>
  );
};
