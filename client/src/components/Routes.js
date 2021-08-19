import react from 'react';
import {Route,Redirect,BrowserRouter,Switch } from 'react-router-dom';
import {useSelector} from 'react-redux';
import LandingPage from './LandingPage'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
import AddData from './AddData';
import Users from './Users'
import Home from './Home'
import UpdateForm from './UpdateForm';
import AddPost from './AddPost';
import GetPost from './GetPost';
import AddComment from './AddComment';
import GetComment from './GetComment';
import loggedUserPost from './loggedUserPost'
import AutoSearch from './AutoSearch';

const PrivateRoute=(props)=>{
    const {token}=useSelector((state)=>state.userData)
    console.log('login',token)

    return token ?(
        <Route {...props} />
    ):(
        <Redirect to={{pathname:"/login"}}/>
    )
}

function Routes(){
    const {token}=useSelector((state)=>state.userData);

    return(
        <BrowserRouter>
        <Switch>
        <PrivateRoute path='/addData' exact component={AddData}/>
        <PrivateRoute path='/getusers' exact component={Users}/>
        <PrivateRoute path='/updatedata' exact component={UpdateForm}/>
        <PrivateRoute path='/postusers' exact component={AddPost}/>
        <PrivateRoute path='/getuserspost' exact component={GetPost}/>
        <PrivateRoute path='/addComment' exact component={AddComment}/>
        <PrivateRoute path='/getcomment' exact component={GetComment}/>
        <PrivateRoute path='/loguserpost' exact component={loggedUserPost}/>
        <PrivateRoute path='/autosearch' exact component={AutoSearch}/>



        <Route path='/' exact component={LandingPage} />
        <Route path='/login' exact component={LoginForm} />
        <Route path='/signup' exact component={SignUpForm}/>
        <Route path='/home' exact component={Home}/>
        </Switch>
        </BrowserRouter>
    )
}
export default Routes;