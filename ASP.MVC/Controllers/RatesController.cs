using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using ASP.MVC.Data;
using ASP.MVC.Models;
using ASP.MVC.Models.Services;

namespace ASP.MVC.Controllers
{
    public class RatesController : Controller
    {
        private IRateService _context;

        public RatesController()
        {
            //_context = context;
            _context = new RatesService();
        }

        // GET: Rates
        public IActionResult Index()
        {
            ViewBag.average = _context.Average();
            return View(_context.GetAll());
        }

        // GET: Rates/Details/5
        public IActionResult Details(int id)
        {
            if (_context == null)
            {
                return NotFound();
            }

            var rate = _context.Get(id);
            if (rate == null)
            {
                return NotFound();
            }

            return View(rate);
        }

        // GET: Rates/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Rates/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        public IActionResult Create([Bind("Id,Name,Rating,Feedback")] Rate rate)
        {
            if (ModelState.IsValid)
            {
                _context.Add(rate);
                return RedirectToAction(nameof(Index));
            }
            return View(rate);
        }

        // GET: Rates/Edit/5
        public IActionResult Edit(int id)
        {
            if (_context == null)
            {
                return NotFound();
            }


            var rate = _context.Get(id);
            if (rate == null)
            {
                return NotFound();
            }
            return View(rate);
        }

        // POST: Rates/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        public IActionResult Edit(int id, [Bind("Id,Name,Rating,Feedback")] Rate rate)
        {
            if (id != rate.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(rate);
                }
                catch
                {
                    if (!RateExists(rate.Id))
                    {
                        return NotFound();
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(rate);
        }

        // GET: Rates/Delete/5
        public IActionResult Delete(int id)
        {
            if (_context == null)
            {
                return NotFound();
            }

            var rate = _context.Get(id);
            if (rate == null)
            {
                return NotFound();
            }

            return View(rate);
        }

        // POST: Rates/Delete/5
        [HttpPost, ActionName("Delete")]
        public IActionResult DeleteConfirmed(int id)
        {
            if (_context == null)
            {
                return Problem("Context  is null.");
            }
            var rate = _context.Get(id);
            if (rate != null)
            {
                _context.Delete(rate.Id);
            }
            
            return RedirectToAction(nameof(Index));
        }

        private bool RateExists(int id)
        {
          return _context.GetAll().Any(e => e.Id == id);
        }
    }
}
