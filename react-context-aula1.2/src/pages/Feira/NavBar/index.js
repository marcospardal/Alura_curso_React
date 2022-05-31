import { Nav } from './styles';
import { ReactComponent as Logo } from 'assets/logo.svg';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useHistory } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { useCarrinhoContext } from '../../../common/context/Carrinho'

export default function NavBar() {
  const { quantidade } = useCarrinhoContext()
  const history = useHistory()

  return (
    <Nav>
      <Logo />
      <IconButton disabled={quantidade === 0} onClick={() => history.push('/carrinho')}>
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