using System.ComponentModel.DataAnnotations;

namespace ASP.MVC.Models
{
    public class Rate
    {
        private static int id = 1;
        [Key]
        public int Id { get; set; }
        
        [Required(ErrorMessage ="Please enter a name.")]
        [MaxLength(100, ErrorMessage = "The max length is 100")]
        public string Name { get; set; }

        [Required(ErrorMessage ="Please enter rate.")]
        [Range(1,5, ErrorMessage = "Rating must be between 1 to 5.")]
        public int Rating { get; set; }

        [Required(ErrorMessage ="Please enter feedback.")]
        [MaxLength(100, ErrorMessage ="The max length is 100.")]
        public string Feedback { get; set; }

        public Rate()
        {

        }
        public Rate(string name, int rating, string feedback)
        {
            Id = id;
            id++;
            Name = name;
            Rating = rating;
            Feedback = feedback;
            
        }
    }
}
