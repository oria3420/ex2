using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ASP.MVC.Models;

namespace ASP.MVC.Data
{
    public class ASPMVCContext : DbContext
    {
        public ASPMVCContext (DbContextOptions<ASPMVCContext> options)
            : base(options)
        {
        }

        public DbSet<ASP.MVC.Models.Rate> Rate { get; set; }
    }
}
