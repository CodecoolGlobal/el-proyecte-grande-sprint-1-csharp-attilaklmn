using System.ComponentModel.DataAnnotations.Schema;

namespace webapi.Model.Entity
{
    public class User
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }
        public string Username { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string Password { get; set; } = null!;
        public bool Admin { get; set; } = false;
    }
}
