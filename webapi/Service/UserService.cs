using Microsoft.EntityFrameworkCore;
using webapi.Data;
using webapi.Exceptions;
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

        if (!BCrypt.Net.BCrypt.EnhancedVerify(loginModelDto.Password, user.Password))
        {
            throw new UnauthorizedAccessException("Invalid username or password!");
        }
    }

    public async Task LoginAdminAsync(LoginModelDto loginModelDto)
    {
        var user = await _context.Users.FirstOrDefaultAsync(u => u.Username == loginModelDto.Username);

        if (user == null)
        {
            throw new UnauthorizedAccessException("Invalid username or password!");
        }

        if (!BCrypt.Net.BCrypt.EnhancedVerify(loginModelDto.Password, user.Password))
        {
            throw new UnauthorizedAccessException("Invalid username or password!");
        }

        if (!user.Admin)
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

        bool isUsernameTaken = await _context.Users.AnyAsync(u => u.Username == registrationModelDto.Username);

        if (isUsernameTaken)
        {
            throw new DataConflictionException("Username is already taken!");
        }

        bool isEmailTaken = await _context.Users.AnyAsync(u => u.Password == registrationModelDto.Password);

        if (isEmailTaken)
        {
            throw new DataConflictionException("E-mail already registered!");
        }

        var user = new User
        {
            Username = registrationModelDto.Username,
            Email = registrationModelDto.Email,
            Password = BCrypt.Net.BCrypt.EnhancedHashPassword(registrationModelDto.Password)
        };

        _context.Users.Add(user);
        try
        {
            await _context.SaveChangesAsync();
        }
        catch (Exception ex)
        {
            throw new InternalDatabaseException("Error saving user to the database!");
        }
    }
}