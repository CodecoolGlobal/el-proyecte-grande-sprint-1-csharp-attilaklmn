using webapi.Model;

namespace webapi.Service;

public class UserService : IUserService
{
    public HttpResponseModel LoginUser(UserModelDTO userModelDto)
    {
        return new HttpResponseModel(200, "");
    }

    public HttpResponseModel RegisterUser(RegistrationModelDTO registrationModelDto)
    {
        return new HttpResponseModel(401, "bab");
    }
}