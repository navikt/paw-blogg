import Link from 'next/link'
import { Sidetittel, Systemtittel } from 'nav-frontend-typografi'
import { Panel } from 'nav-frontend-paneler'

const Home = () => {
  return (
    <>
      <Sidetittel>PAW</Sidetittel>
      <div>
        <Link href="/maal">
          <a>
            <Panel border>
              <Systemtittel>Mål</Systemtittel>
            </Panel>
          </a>
        </Link>
        <Link href="/oppgaver">
          <a>
            <Panel border>
              <Systemtittel>Oppgaver</Systemtittel>
            </Panel>
          </a>
        </Link>
        <Link href="/eksperimenter">
          <a>
            <Panel border>
              <Systemtittel>Eksperimenter</Systemtittel>
            </Panel>
          </a>
        </Link>
        <Link href="/teamet">
          <a>
            <Panel border>
              <Systemtittel>Teamet</Systemtittel>
            </Panel>
          </a>
        </Link>
      </div>
    </>
  )
}

export default Home
