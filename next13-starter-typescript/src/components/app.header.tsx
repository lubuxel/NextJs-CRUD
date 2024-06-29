'use client'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Button from 'react-bootstrap/Button';

function AppHeader() {
  const router = useRouter();
  const handleOnclickBackHome = () => {
    router.push("/");
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <Link href="/" className='navbar-brand'>
            NEXTJS
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href="/blogs" className={'nav-link'}>
              Blogs
            </Link>
            <Link href="/facebook" className={'nav-link'}>
              FaceBook
            </Link>
            <Link href="/tiktok" className={'nav-link'}>
              TikTok
            </Link>
            <Link href="/youtube" className={'nav-link'}>
              Youtube
            </Link>           
          </Nav>
            <Button variant='success' onClick={() => handleOnclickBackHome()}>
              Home    
            </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppHeader;