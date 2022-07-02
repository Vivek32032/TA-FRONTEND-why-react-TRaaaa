function Header() {
    return (
        <>
            <header className="bg-blue-300 p-5 rounded flex justify-between">
                <a className="text-2xl font-bold text-blue-900" href="index.html">Short-News</a>
                <nav className="w-1/4">
                    <ul className="flex justify-between">
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
export default Header;