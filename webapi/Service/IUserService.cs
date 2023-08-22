using webapi.Model;
using webapi.Model.Entity;

namespace webapi.Service;

public interface IUserService
{
    Task<User> LoginUserAsync(LoginModelDto loginModelDto);
    Task LoginAdminAsync(LoginModelDto loginModelDto);
    Task RegisterUserAsync(RegistrationModelDto registrationModelDto);
}