import Button from '../Button';
import Nav from '../Nav';
import Checkbox from '../Checkbox';
import Inputfield from '../Inputfield';
import Radiobutton from '../Radiobutton';
import Selectopition from '../Selectopition';
import Textarea from '../Textarea';
import Typography from '../Typography';


function Home() {


    return(
        <div>
            <Nav text="TWINITECH IT SOLUTION " color="#000000"/>
            <h1>My Components</h1>
            <Button text="Checkbox" color="#8bc34a"/>
            <Button text="Inputfield" color="#2979ff"/>
            <Button text="Nav" color="#9c27b0"/>
            <Button text="Radiobutton" color="#af52bf"/>
            <Button text="Selectopition" color="##ffea00"/>
            <Button text="Textarea" color="#fff391"/>
            <Button text="Typography"color="rgb(255,100,10"/>
            <Checkbox />
            <Inputfield />
            <Radiobutton />
            <Selectopition />
            <Textarea />
            <Typography />

        </div>
    )
}
export default Home;
