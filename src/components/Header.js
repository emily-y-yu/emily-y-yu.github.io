import './Header.css';
import { useState } from 'react';
import resume from '../files/2022 Resume.pdf';

const Header = () => {
    const [isPencilVisible, setIsPencilVisible] = useState(true);

    return(
        <div className='header'>
            <div className='name'
                onMouseLeave={() => setIsPencilVisible(!isPencilVisible)}>
                Emily Yu
                <span>
                    {isPencilVisible && (<i class='fa fa-pencil icon' aria-hidden='true'></i>)}
                    {!isPencilVisible && (<i class='fa fa-laptop icon' aria-hidden='true'></i>)}
                </span>
            </div>
            <div className='nav'>
                <li><a href="https://eminherelement.wordpress.com/" target="_blank">Blog</a></li>
                <li><a href={resume} target="_blank">Resume</a></li>
				<li><a href="https://www.linkedin.com/in/emily-y-yu/" target="_blank">LinkedIn</a></li>
				<li><a href="mailto:emily.yanyan.yu[at]gmail.com" target="_blank">Contact</a></li>
            </div>
        </div>
    );
};

export default Header;