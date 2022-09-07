import './Bio.css';
import me from '../files/me.jpg';

const Bio = () => {
    return(
        <div className='bio'>
            <img src={me} className='photo' />
            <h1 className='title'>Hi, I'm Emily</h1>
            <h2 className='subtitle'>I'm a front-end engineer and writer</h2>
            <div className='text'>
            <p><i class='fa fa-globe icon' aria-hidden='true'></i> the big apple</p>
            <p><i class='fa fa-graduation-cap icon' aria-hidden='true'></i><a href="http://umbc.edu/" target="_blank">UMBC</a>; studied computer science & creative writing</p>
			<p><i class='fa fa-briefcase icon' aria-hidden='true'></i> <a href="http://morganstanley.com/">Morgan Stanley</a>; building apps & drinking too much hot chocolate</p>
            <p><i class='fa fa-heart icon' aria-hidden='true'></i> reading, baking, listening to 80s/90s music</p>
            </div>
        </div>
    );
};

export default Bio;