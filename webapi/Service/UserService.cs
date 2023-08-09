using Microsoft.EntityFrameworkCore;
using webapi.Data;
using webapi.Model;
using webapi.Model.Entity;

namespace webapi.Service;

public class UserService : IUserService
{
    private readonly CinemaSharpContext _context;
    
    public UserService(CinemaSharpContext context)
    {
        _context = context;
    }
    public async Task LoginUserAsync(LoginModelDto loginModelDto)
    {
        var user = await _context.Users.FirstOrDefaultAsync(u => u.Username == loginModelDto.Username);

        if (user == null)
        {
            throw new KeyNotFoundException("Username not found!");
        }

        if (user.Password != loginModelDto.Password)
        {
            throw new UnauthorizedAccessException("Invalid username or password.");
        }
    }

    public async Task RegisterUserAsync(RegistrationModelDto registrationModelDto)
    {
        var user = new User
        {
            Username = registrationModelDto.Username,
            Email = registrationModelDto.Email,
            Password = registrationModelDto.Password
        };

        _context.Users.Add(user);
        await _context.SaveChangesAsync();
    }
}