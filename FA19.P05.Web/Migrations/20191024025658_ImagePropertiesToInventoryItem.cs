using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace FA19.P05.Web.Migrations
{
    public partial class ImagePropertiesToInventoryItem : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "FileName",
                table: "InventoryItem",
                nullable: true);

            migrationBuilder.AddColumn<byte[]>(
                name: "ImageBytes",
                table: "InventoryItem",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FileName",
                table: "InventoryItem");

            migrationBuilder.DropColumn(
                name: "ImageBytes",
                table: "InventoryItem");
        }
    }
}
