import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../../services/api";
import {APIRoute} from "../../const";

const api = createAPI(() => {});

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
