using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FA19.P05.Web.Features.Inventory
{
    public class Image
    {
        public int Id { get; set; }

        public string FileName { get; set; }

        public byte[] ImageBytes { get; set; }
    }
}
