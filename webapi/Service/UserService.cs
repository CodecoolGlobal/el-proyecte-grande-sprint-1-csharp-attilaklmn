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
    public HttpResponseModel LoginUser(UserModelDto userModelDto)
    {
        return new HttpResponseModel(200, "");
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