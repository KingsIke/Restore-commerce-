using System;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography.X509Certificates;
using RESTORE_API.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;


namespace RESTORE_API;


	public class StoreContext(DbContextOptions options) : IdentityDbContext<User>(options)
	{
		public required DbSet<Product> Products { get;  set; }
		public required DbSet<Basket> Baskets { get;  set; }

		protected override void OnModelCreating(ModelBuilder builder)
	{
		base.OnModelCreating(builder);

		builder.Entity<IdentityRole>()
			.HasData(
				new IdentityRole { Id = "06837c3f-b56a-433a-b465-a67dd9ac3cf3", Name = "Member", NormalizedName = "MEMBER" },
				new IdentityRole { Id = "9a2758b7-c958-4907-80ad-880c572ee885", Name = "Admin", NormalizedName = "ADMIN" }
			);
	}
	}



