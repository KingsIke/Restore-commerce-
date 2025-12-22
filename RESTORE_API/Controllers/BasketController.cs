using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RESTORE_API.Entities;

namespace RESTORE_API.Controllers
{
    public class BasketController(StoreContext context):BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<Basket>> GetBasket()
        {
            var basket = await RetrieveBasket();

            if(basket == null) return NoContent();
            return basket;
        }
        
        public async Task<ActionResult> AddItemToBasket(int productId, int quantity)
        {
            var basket = await RetrieveBasket();
            basket ??= CreateBasket();
            var product = await context.Products.FindAsync(productId);
            if(product == null) return BadRequest("Problem adding item to Basket");

            basket.AddItem(product, quantity);
            var result = await context.SaveChangesAsync() > 0;

            if(result) return CreatedAtAction(nameof(GetBasket), basket);
            return BadRequest("Problem updating basket");
        }

        private Basket CreateBasket()
        {
          var basketId = Guid.NewGuid().ToString();
          var cookieOption = new CookieOptions
          {
              IsEssential = true,
              Expires = DateTime.UtcNow.AddDays(30)
          };
          Response.Cookies.Append("basketId", basketId, cookieOption);
          var basket = new Basket{BasketId = basketId};
          context.Baskets.Add(basket);
          return basket;
        }


        private async Task<Basket?> RetrieveBasket()
        {
            return await context.Baskets
            .Include(item=> item.Items)
            .ThenInclude(item => item.Product)
            .FirstOrDefaultAsync(item => item.BasketId == Request.Cookies["basketId"]);

        }
    }
}