using webapi.Model;
using webapi.Model.Entity;

namespace webapi.Service;

public interface IUserService
{
    Task<User> LoginUserAsync(LoginModelDto loginModelDto);
    Task RegisterUserAsync(RegistrationModelDto registrationModelDto);
    Task CheckPasswordMatchAsync(string username, string password);
}