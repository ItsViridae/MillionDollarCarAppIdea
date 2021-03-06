﻿// <auto-generated />
using System;
using FA19.P05.Web.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace FA19.P05.Web.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20190917154824_EnforceUnqiueEmail")]
    partial class EnforceUnqiueEmail
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("FA19.P05.Web.Features.Authorization.Role", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name")
                        .HasMaxLength(32);

                    b.HasKey("Id");

                    b.ToTable("Role");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Name = "Admin"
                        },
                        new
                        {
                            Id = 2,
                            Name = "Customer"
                        },
                        new
                        {
                            Id = 3,
                            Name = "GM"
                        },
                        new
                        {
                            Id = 4,
                            Name = "Sales"
                        });
                });

            modelBuilder.Entity("FA19.P05.Web.Features.Authorization.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasMaxLength(1000);

                    b.Property<string>("Name")
                        .HasMaxLength(200);

                    b.HasKey("Id");

                    b.HasIndex("Email")
                        .IsUnique();

                    b.ToTable("User");
                });

            modelBuilder.Entity("FA19.P05.Web.Features.Authorization.UserRole", b =>
                {
                    b.Property<int>("UserId");

                    b.Property<int>("RoleId");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("UserRole");
                });

            modelBuilder.Entity("FA19.P05.Web.Features.CreditScores.CreditScore", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("CreditNumber");

                    b.Property<int>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("CreditScore");
                });

            modelBuilder.Entity("FA19.P05.Web.Features.Dealerships.Dealership", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("OpenHours")
                        .IsRequired()
                        .HasMaxLength(64);

                    b.Property<string>("SalesPhoneNumber")
                        .IsRequired()
                        .HasMaxLength(12);

                    b.Property<string>("StoreName")
                        .IsRequired()
                        .HasMaxLength(64);

                    b.HasKey("Id");

                    b.ToTable("Dealership");
                });

            modelBuilder.Entity("FA19.P05.Web.Features.Inventory.InventoryOption", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Make")
                        .IsRequired()
                        .HasMaxLength(10);

                    b.Property<string>("Model")
                        .IsRequired()
                        .HasMaxLength(10);

                    b.Property<string>("OptionDescription")
                        .IsRequired()
                        .HasMaxLength(1000);

                    b.Property<decimal>("Price");

                    b.Property<int>("Year");

                    b.HasKey("Id");

                    b.ToTable("InventoryOption");
                });

            modelBuilder.Entity("FA19.P05.Web.Features.InventoryItems.InventoryItem", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTimeOffset>("AddedToStockUtc");

                    b.Property<decimal>("BaseCost");

                    b.Property<int>("DealershipId");

                    b.Property<string>("Make")
                        .IsRequired()
                        .HasMaxLength(10);

                    b.Property<string>("Model")
                        .IsRequired()
                        .HasMaxLength(10);

                    b.Property<string>("VIN")
                        .IsRequired()
                        .HasMaxLength(24);

                    b.Property<int>("Year");

                    b.HasKey("Id");

                    b.HasIndex("DealershipId");

                    b.ToTable("InventoryItem");
                });

            modelBuilder.Entity("FA19.P05.Web.Features.Authorization.UserRole", b =>
                {
                    b.HasOne("FA19.P05.Web.Features.Authorization.Role", "Role")
                        .WithMany("Users")
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("FA19.P05.Web.Features.Authorization.User", "User")
                        .WithMany("Roles")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("FA19.P05.Web.Features.CreditScores.CreditScore", b =>
                {
                    b.HasOne("FA19.P05.Web.Features.Authorization.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("FA19.P05.Web.Features.Dealerships.Dealership", b =>
                {
                    b.OwnsOne("FA19.P05.Web.Features.Shared.Address", "Address", b1 =>
                        {
                            b1.Property<int>("DealershipId")
                                .ValueGeneratedOnAdd()
                                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                            b1.Property<string>("City")
                                .HasMaxLength(64);

                            b1.Property<string>("Line1")
                                .HasMaxLength(64);

                            b1.Property<string>("Line2")
                                .HasMaxLength(64);

                            b1.Property<string>("State")
                                .HasMaxLength(2);

                            b1.Property<string>("ZipCode")
                                .HasMaxLength(5);

                            b1.HasKey("DealershipId");

                            b1.ToTable("Dealership");

                            b1.HasOne("FA19.P05.Web.Features.Dealerships.Dealership")
                                .WithOne("Address")
                                .HasForeignKey("FA19.P05.Web.Features.Shared.Address", "DealershipId")
                                .OnDelete(DeleteBehavior.Cascade);
                        });
                });

            modelBuilder.Entity("FA19.P05.Web.Features.InventoryItems.InventoryItem", b =>
                {
                    b.HasOne("FA19.P05.Web.Features.Dealerships.Dealership", "Dealership")
                        .WithMany()
                        .HasForeignKey("DealershipId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
