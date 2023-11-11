import { Avatar, Button, Image } from '@chakra-ui/react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'

import { BiSolidChevronDown } from 'react-icons/bi';
import './Comp_styles/NavbarComp.css'
function NavbarComp() {
  return (
    <div className='navbar'>


      <Image h='30' w='30' src='logo.svg' />
      <ul>
        <li>
          <Menu>
            <MenuButton  rightIcon={<BiSolidChevronDown />}>
              Projects
            </MenuButton>
            <MenuList>
              <MenuItem>Project 1</MenuItem>
              <MenuItem>Project 2</MenuItem>
              <MenuItem>Project 3</MenuItem>
            </MenuList>
          </Menu>
        </li>
        <li>
          <Button>
             New
          </Button>
        </li>
        <li>
      <Avatar size='sm' name='Aish' />

        </li>
      </ul>

    </div>
  );
}
export default NavbarComp;