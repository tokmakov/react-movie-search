function Footer() {
    return (
        <footer className="page-footer light-green darken-3">
            <div className="container">
                © {new Date().getFullYear()} All rights reserved
            </div>
        </footer>
    );
}

export default Footer;