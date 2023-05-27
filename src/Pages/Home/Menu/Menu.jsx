import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
// import pizzaImg from '../../../assets/menu/pizza-bg.jpg ';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import MenuCategory from './Menu/MenuCategory/MenuCategory';
const Menu = () => {
    const [menu]=useMenu();
    const desserts = menu.filter(item => item.category === 'desserts')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Bristo / menu</title>
            </Helmet>
            <Cover img={menuImg}
                title='our menu'></Cover>
                {/* main cover */}
                <SectionTitle subHeading={menuImg} heading='Todays offer'></SectionTitle>
               {/* offerd menu item */}
                <MenuCategory items={offered}></MenuCategory>
                {/* desserts menu item */}
                <MenuCategory items={desserts}
                img={dessertImg} 
                title='Dessert'></MenuCategory>
                {/* pizza menu item */}
                <MenuCategory items={pizza}
                img={pizzaImg} 
                title={'pizza'}
                ></MenuCategory>
                <MenuCategory items={salad}
                img={saladImg} 
                title={'salad'}
                ></MenuCategory>
                <MenuCategory items={soup}
                img={soupImg} 
                title={'soup'}
                ></MenuCategory>
  </div>
    );
};

export default Menu;