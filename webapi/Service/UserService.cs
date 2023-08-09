using Microsoft.EntityFrameworkCore;
using webapi.Data;
using webapi.Model;
using webapi.Model.Entity;
using webapi.Service.SubService;

namespace webapi.Service;

public class UserService : IUserService
{
    private readonly CinemaSharpContext _context;
    private readonly IUserDataValidator _userDataValidator;

    public UserService(CinemaSharpContext context, IUserDataValidator userDataValidator)
    {
        _context = context;
        _userDataValidator = userDataValidator;
    }

    public async Task LoginUserAsync(LoginModelDto loginModelDto)
    {
        var user = await _context.Users.FirstOrDefaultAsync(u => u.Username == loginModelDto.Username);

        if (user == null)
        {
            throw new UnauthorizedAccessException("Invalid username or password!");
        }

        if (user.Password != loginModelDto.Password)
        {
            throw new UnauthorizedAccessException("Invalid username or password!");
        }
    }

    public async Task RegisterUserAsync(RegistrationModelDto registrationModelDto)
    {
        if (!_userDataValidator.ValidateUsername(registrationModelDto.Username))
        {
            throw new UnauthorizedAccessException("Wrong username format!");
        }
        
        if (!_userDataValidator.ValidatePasswordRegex(registrationModelDto.Password))
        {
            throw new UnauthorizedAccessException("Wrong password format!");
        }

        if (!_userDataValidator.ValidateEmailRegex(registrationModelDto.Email))
        {
            throw new UnauthorizedAccessException("Wrong e-mail format!");
        }

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