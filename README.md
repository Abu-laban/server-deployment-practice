# server-deployment-practice

## LAB - 01

### Deployment Test

**Author: Tariq Abu-Laban**

- [tests report](https://github.com/Abu-laban/server-deployment-practice/actions).
- [back-end-dev](https://tariq-server-deploy-dev.herokuapp.com/).
- [back-end-prod](https://tariq-server-deploy-prod.herokuapp.com/).
- [pull request](https://github.com/Abu-laban/server-deployment-practice/pull/1).

**Setup**

`.env` **requirements**

- `PORT` - Port Number

**Running the app**

- `npm start`

- Endpoint: `/data`

  - Returns Object

        {
        "5": "odd",
        "10": "even",
        "time": "Sun Aug 15 2021 20:33:26 GMT+0000 (Coordinated Universal Time)"
        }

**Tests**

- Unit Tests: `npm run test`
- Lint Tests: `npm run lint`
