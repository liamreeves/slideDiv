import React from "react";

interface HeaderProps {
    isOpen: boolean
    handleOpen: () => void
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
    return (
        <header className="flex justify-between h-20 bg-[rgb(0,123,0)] z-0">
            <img alt="site logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/440px-Image_created_with_a_mobile_phone.png" />
            <div className="*:m-5 flex hover:*:text-green-100 *:transition-all *:duration-300 hover:*:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                <a rel="noreferrer" target="_blank" href="https://x.com">Home</a>
                <a rel="noreferrer" target="_blank" href="https://x.com">Away</a>
                <a rel="noreferrer" target="_blank" href="https://x.com">Lost</a>
                <p onClick={props.handleOpen}>Found</p>
            </div>
        </header>
    );
}

export default Header;