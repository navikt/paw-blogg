import Link from 'next/link'
import { EtikettLiten } from 'nav-frontend-typografi'

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>
              <EtikettLiten>Hjem</EtikettLiten>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/maal">
            <a>
              <EtikettLiten>Mål</EtikettLiten>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/oppgaver">
            <a>
              <EtikettLiten>Oppgaver</EtikettLiten>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/eksperimenter">
            <a>
              <EtikettLiten>Eksperimenter</EtikettLiten>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/teamet">
            <a>
              <EtikettLiten>Teamet</EtikettLiten>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
