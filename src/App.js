import React, {useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Route,Switch,useHistory } from 'react-router-dom'
import { handleFetchInitial } from './actions/shared'
import Dashboard from './containers/Dashboard/Dashboard'
import Login from './containers/login/login'
import Nav from './containers/Nav/Nav'
import NewQuestion from './containers/NewQuestion/NewQuestion'
import Leaderboard from './containers/Leaderboard/Leaderboard'
import Question from './containers/Question/Question'
import QuestionView from './containers/QuestionView/QuestionView'
import Error from './containers/Error/Error'

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleFetchInitial())
}, [dispatch])

  const history = useHistory();
  const Auth = useSelector((state) => state.authedUser.isAuthUser)
  const loggedUser = useSelector((state) => state.authedUser.user[0])
  if (!Auth) {
    history.push('/login');
  }

    return (
      <>
        {
          Auth ? <Nav userID={loggedUser} /> : ''
        }
        <div className="container">
            <div>
            <Switch>
              <Route path='/login' exact component={Login} />
              <Route path='/' exact render={() =>(
                <Dashboard user={loggedUser} />
              )}>
              </Route>
              <Route
                path="/questions"
                exact
                component={Question}
              />
              <Route
                path="/questions/:question_id"
                exact
                component={QuestionView}
              />
              <Route path='/add' exact component={NewQuestion} />
              <Route path='/leaderboard' exact component={Leaderboard} />
              <Route path='/error'>
                <Error />
              </Route>
              <Route>
                <Error />
              </Route>
            </Switch>
            </div>
        </div>
      </> 
    )
}

export default App