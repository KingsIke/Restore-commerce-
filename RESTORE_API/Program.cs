using RESTORE_API;
using Microsoft.EntityFrameworkCore;
using RESTORE_API.Data;
using RESTORE_API.Middleware;
using RESTORE_API.Entities;
using Microsoft.AspNetCore.Identity;
var builder = WebApplication.CreateBuilder(args);


// Add services to the container.
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp",
        policy => policy.WithOrigins(
                        "http://localhost:3000", 
                        "https://localhost:3000",  
                        "http://localhost:3100", 
                        "https://localhost:3100"  
                        )
                        .AllowAnyMethod()
                        .AllowAnyHeader()
                        .AllowCredentials());
});

builder.Services.AddControllers();
builder.Services.AddDbContext<StoreContext>(opt =>
{
    opt.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
});
builder.Services.AddTransient<ExceptionMiddleware>();
builder.Services.AddIdentityApiEndpoints<User>(opt =>
{
    opt.User.RequireUniqueEmail = true;
    opt.Password.RequireNonAlphanumeric = true;
    opt.SignIn.RequireConfirmedEmail = false;
})
    .AddRoles<IdentityRole>()
    .AddEntityFrameworkStores<StoreContext>();
builder.Services.AddHealthChecks();

// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
// builder.Services.AddOpenApi();


// Adding Cors Service

var app = builder.Build();

// Configure the HTTP request pipeline.
// if (app.Environment.IsDevelopment())
// {
//     app.MapOpenApi();
// }

// app.UseHttpsRedirection();

// app.UseAuthorization();

app.UseMiddleware<ExceptionMiddleware>();
// Adding Cors Policy
//app.UseCors(policy => policy.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:3000"));
app.UseCookiePolicy(new CookiePolicyOptions
{
    MinimumSameSitePolicy = SameSiteMode.None,
    Secure = CookieSecurePolicy.Always
});
app.UseCors("AllowReactApp");


app.MapHealthChecks("/health");
app.UseAuthentication();
app.UseAuthorization();
app.MapGroup("api").MapIdentityApi<User>();
app.MapControllers();
// db stater
await DbInitializer.InitDb(app);

app.Run();
