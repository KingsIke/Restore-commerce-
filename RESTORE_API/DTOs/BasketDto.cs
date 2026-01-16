using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RESTORE_API.DTOs
{
    public class BasketDto
    {
           public int Id { get; set; }
        public required string BasketId { get; set; }

        public  List<BasketItemDto> Items { get; set; } = [];
    }

  
}