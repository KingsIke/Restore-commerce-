using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RESTORE_API.DTOs;
using RESTORE_API.Entities;

namespace RESTORE_API.Extensions
{
    public static class BasketExtensions
    {
        public static BasketDto ToDto(this Basket basket)
        {
            return new BasketDto
            {
                BasketId = basket.BasketId,
                Items = basket.Items.Select(item => new BasketItemDto
                {
                    ProductId = item.ProductId,
                    Name = item.Product.Name,
                    Price = item.Product.Price,
                    Brand = item.Product.Brand,
                    Type = item.Product.Type,
                    PictureUrl = item.Product.PictureUrl,
                    Quantity =  item.Quantity,
                    Description = item.Product.Description

                }).ToList()
            };
        }   
    }
}