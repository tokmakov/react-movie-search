function Header() {
    return (
        <header>
            <nav className="light-green darken-3">
                <div className="nav-wrapper container">
                    <a href="#" className="brand-logo">Movie search</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="#">Link one</a></li>
                        <li><a href="#">Link two</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;