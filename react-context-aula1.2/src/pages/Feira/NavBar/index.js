import { Nav } from './styles';
import { ReactComponent as Logo } from 'assets/logo.svg';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { useCarrinhoContext } from '../../../common/context/Carrinho'

export default function NavBar() {
  const { quantidade } = useCarrinhoContext()

  return (
    <Nav>
      <Logo />
      {quantidade}
      <IconButton disabled={quantidade === 0}>
        <Badge
          color="primary"
          badgeContent={quantidade}
        >
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </Nav>
  )
}