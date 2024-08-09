var builder = WebApplication.CreateBuilder(args);

// Configuração de CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        builder => builder.AllowAnyOrigin()
                          .AllowAnyMethod()
                          .AllowAnyHeader());
});

builder.Services.AddControllers();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}
else
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

// Aplica a política de CORS
app.UseCors("AllowAll");

app.UseAuthorization();

app.MapControllers();

app.Run();

// using Microsoft.EntityFrameworkCore;
// using MinhaApi.Models;

// var builder = WebApplication.CreateBuilder(args);

// // Adiciona serviços ao contêiner.
// builder.Services.AddControllers();

// // Configura o contexto do banco de dados
// builder.Services.AddDbContext<AppDbContext>(options =>
//     options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// // Configura o CORS
// builder.Services.AddCors(options =>
// {
//     options.AddPolicy("AllowAll",
//         builder =>
//         {
//             builder.AllowAnyOrigin()
//                    .AllowAnyMethod()
//                    .AllowAnyHeader();
//         });
// });

// var app = builder.Build();

// // Configura o pipeline de requisição HTTP.
// if (app.Environment.IsDevelopment())
// {
//     app.UseDeveloperExceptionPage();
// }

// app.UseHttpsRedirection();

// app.UseCors("AllowAll");

// app.UseAuthorization();

// app.MapControllers();

// app.Run();
