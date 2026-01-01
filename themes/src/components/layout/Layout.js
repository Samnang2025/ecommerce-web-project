
import './Layout.css';
import logo from '../../assets/logo/boy.png';

import {useNavigate} from 'react-router-dom';

function Layout() {

    // Extend
    const navigate = useNavigate()

    const onClickMenu = (routeName) => { // Arrow function 
        navigate(routeName)
    }

    return (
        <div className="mainHeader">
            <div className='brandContain' onClick={()=>onClickMenu('/')}>
                <img src={logo} style={{width:50, height:50, marginRight: 10}} alt='logo'/>
                <div>
                        <div className='txtBrand'>View Store</div>
                <div className='subBrand'>You have a gift</div>
                </div>
            </div>
            <div className='menuContain'>
                <ul className='menu'>
                    <li onClick={()=>onClickMenu('/')} className='menuItem'>Home</li>
                    <li onClick={()=>onClickMenu('/about')} className='menuItem'>About</li>
                    <li onClick={()=>onClickMenu('/product')} className='menuItem'>Product</li>
                    <li onClick={()=>onClickMenu('/category')} className='menuItem'>Category</li>
                    <li onClick={()=>onClickMenu('/login')} className='menuItem'>Login</li>
                </ul>
            </div>
        </div>
    )
}

export default Layout;