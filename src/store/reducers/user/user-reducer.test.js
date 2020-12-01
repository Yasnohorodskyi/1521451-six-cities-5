import MockAdapter from "axios-mock-adapter";
import {UserType, APIRoute} from "../../const";
import {user} from "../../../mocks-for-tests/mocks";
import {createAPI} from "../../../services/api";
import {userReducer} from "./user-reducer";

const api = createAPI(() => {});


describe(`Reducer User`, () => {
  /*
  it(`REQUIRED_AUTHORIZATION`, () => {
    expect(User(initialState ,{
      type: UserType.REQUIRED_AUTHORIZATION,
      payload: {
        user
      },
    })).toEqual({
      user,
      authorizationStatus: `AUTH`
    });
  });


  it(`AuthorizationStatus`, () => {
    expect(User({user} ,{
      type: UserType.AuthorizationStatus,
      payload: {
        data: user
      }
    })).toEqual({
      data: user,
      authorizationStatus: user.AuthorizationStatus
    });
  });
  */


  it(`REQUIRED_ERROR`, () => {
    expect(userReducer({error: `error`}, {
      type: UserType.REQUIRED_ERROR,
      payload: {
        error: `404 Not found`
      },
    })).toEqual({
      error: `404 Not found`
    });
  });
});

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
