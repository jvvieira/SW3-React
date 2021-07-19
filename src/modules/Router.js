import LoginPage from "./Login/Login.Page"

import { ErrorPage } from "./Error/Error.Page"
import LoginNSPForm from "./Login/NSP/Login.NSP.Form"
import LoginForm from "./Login/Login.Form"

export const routes = client => {
  if (client === 'nsp')
      return [
        {
          component: LoginNSPForm,
          path: '/',
          exact: true
        },
        {
            component: ErrorPage,
            path: '*'
        }
      ]
  else
      return [
        {
          component: LoginForm,
          path: '/',
          exact: true,
        },
        {
            component: ErrorPage,
            path: '*'
        }
      ]
}

// export const routes = [
//     {
//       component: LoginPage,
//       path: '/',
//       exact: true,
//     },
//     {
//         component: ErrorPage,
//         path: '*'
//     }
//   ]