using webapi.Model;

namespace webapi.Service;

public interface IUserService
{
    HttpResponseModel LoginUser(UserModelDTO userModelDto);
    HttpResponseModel RegisterUser(RegistrationModelDTO registrationModelDto);
}