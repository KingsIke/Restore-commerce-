using System;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography.X509Certificates;
using RESTORE_API.Entities;

namespace RESTORE_API;


	public class StoreContext(DbContextOptions options) : DbContext(options)
	{
		public required DbSet<Product> Products { get;  set; }
	}
	


