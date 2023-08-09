using webapi.Model;

namespace webapi.Service;

public interface IUserService
{
    HttpResponseModel LoginUser(UserModelDto userModelDto);
    Task RegisterUserAsync(RegistrationModelDto registrationModelDto);
}