import React, { useEffect, Fragment, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Repos from '../repos/Repos';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from '../Spinner';
import GithubContext from '../../../context/github/githubContext';

// HOC to inject params into class component
function withRouter(WrappedComponent) {
  return (props) => {
    const params = useParams();
    return <WrappedComponent {...props} params={params} />;
  };
}

const User = ({ params}) => {
  const githubContext = useContext(GithubContext);

  const {user, loading, getUsers, repos, getUsersRepos} = githubContext
  useEffect(() => {
    getUsers(params.login);
    getUsersRepos(params.login)
    //eslint-disable-next-line
  }, [])

    const {
      name,
      company,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable
    } = user;

    if(loading){
      <Spinner />
    }

    return (
      <Fragment>
        <Link to='/' className='btn btn-light'>
          Back to Search
        </Link>
        Hireable: {''}
        {hireable ? <i className='fas fa-check text-success' /> : <i className='fas fa-times-circle text-danger' />}
        <div className='card grid-2'> 
          <div className='all-center'>
            <img src={avatar_url} className='round-img' alt='' style={{width: '150px'}} />
            <h3>{name}</h3>
            <p>Location: </p> {location}
          </div>
          <div>
            {bio && <Fragment>
              <h3>Bio</h3>  
              <p>{bio}</p>
            </Fragment>}
            <a href={html_url} className='btn btn-dark my-1'>Visit Github Profile</a>
            <ul>
              <li>Username: </li> {login}
              <li>Company: </li> {company}
              <li>Website: </li> {blog}
            </ul>
          </div>
        </div>

        <div className='card text-center'>
          <div className='badge badge-primary'>Followers: </div> {followers}
          <div className='badge badge-success'>Following: </div> {following}
          <div className='badge badge-light'>Public Repos: </div> {public_repos}
          <div className='badge badge-dark'>Public Gists: </div> {public_gists}
        </div>

        <Repos repos={repos} />
      </Fragment>
    );
  }

User.propTypes = {
  loading: PropTypes.bool,
  getUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  repos: PropTypes.array.isRequired,
  getUsersRepos: PropTypes.func.isRequired,
}

export default withRouter(User);