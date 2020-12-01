import MockAdapter from "axios-mock-adapter";
import {UserType, APIRoute} from "../../const";
import {user} from "../../../mocks-for-tests/mocks";
import {createAPI} from "../../../services/api";
import {User} from "./user";

const api = createAPI(() => {});
const initialState = {
  data: [],
  authorizationStatus: `NO_AUTH`
};
/*
describe(`Reducer User`, () => {

  it(`REQUIRED_AUTHORIZATION`, () => {
    expect(User(initialState ,{
      type: UserType.REQUIRED_AUTHORIZATION,
      payload: user,
    })).toEqual({
      data: user,
      authorizationStatus: `AUTH`
    });
  });


  it(`AuthorizationStatus`, () => {
    expect(User(initialState ,{
      type: UserType.AuthorizationStatus,
      payload: user,
    })).toEqual({
        data: user,
        authorizationStatus: `AUTH`
    });
  });

  it(`REQUIRED_ERROR`, () => {
    expect(User({error: 'error'} ,{
      type: UserType.REQUIRED_ERROR,
      payload: 'error',
    })).toEqual({
      error: undefined
    });
  });


})


describe(`Async operation work correctly`, () => {
  const fakeUser = {login: `test@test.ru`, password: `123456`};
  let mock;
  beforeEach(function () {
    mock = new MockAdapter(api);
  });
  it(`Test Login action`, function () {
    mock
      .onPost(APIRoute.LOGIN, {params: fakeUser}).reply(200, {
        users: [fakeUser],
      });
    return api
      .post(APIRoute.LOGIN, {params: fakeUser})
      .then(function (response) {
        expect(response.status).toBe(200);
      });
  });
});
*/
