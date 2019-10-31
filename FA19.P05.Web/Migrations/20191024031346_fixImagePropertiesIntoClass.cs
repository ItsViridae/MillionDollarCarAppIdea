using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace FA19.P05.Web.Migrations
{
    public partial class fixImagePropertiesIntoClass : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FileName",
                table: "InventoryItem");

            migrationBuilder.DropColumn(
                name: "ImageBytes",
                table: "InventoryItem");

            migrationBuilder.CreateTable(
                name: "Image",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FileName = table.Column<string>(nullable: true),
                    ImageBytes = table.Column<byte[]>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Image", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Image");

            migrationBuilder.AddColumn<string>(
                name: "FileName",
                table: "InventoryItem",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<byte[]>(
                name: "ImageBytes",
                table: "InventoryItem",
                type: "varbinary(max)",
                nullable: true);
        }
    }
}
