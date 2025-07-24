import '../navbar/navBar.css';
const NavBar = function(){
    return (
        <header class = "header">
            <h1 class = "logo">Landscape</h1>

                <nav class= "navBar">
                    <a class = "nav-link" href="#China">China</a>
                    <a class = "nav-link" href="#Pakistan">Pakistan</a>
                    <a class = "nav-link" href="#Italy">Italy</a>
                    <a class = "nav-link" href="#India">India</a>
                </nav>
        </header>
    )
}
export default NavBar;