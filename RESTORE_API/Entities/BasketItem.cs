using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RESTORE_API.Entities
{
    public class BasketItem
    {
        public int Id { get; set; }

        public int Quantity { get; set; }

        // navigation properti
        public int ProductId { get; set; }

        public required Product Product  { get; set; }
        public int BasketId { get; set; }

        public Basket Basket { get; set; } = null!;
    }
}