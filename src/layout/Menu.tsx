import { Menu } from 'react-admin';
import LabelIcon from '@mui/icons-material/Label';

const MyMenu = () => (
    <Menu>
        <Menu.Item to="/screens" primaryText="Screens" leftIcon={<LabelIcon />}/>
        {/* <Menu.Item to="/screens" primaryText="Screens" leftIcon={<LabelIcon />}/> */}
    </Menu>
);
export default MyMenu