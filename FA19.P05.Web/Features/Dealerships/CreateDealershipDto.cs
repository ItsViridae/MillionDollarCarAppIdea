﻿using FA19.P05.Web.Features.Shared;

namespace FA19.P05.Web.Features.Dealerships
{
    public class CreateDealershipDto : IDealership
    {
        public Address Address { get; set; }

        public string SalesPhoneNumber { get; set; }

        public string StoreName { get; set; }

        public string OpenHours { get; set; }
    }
}