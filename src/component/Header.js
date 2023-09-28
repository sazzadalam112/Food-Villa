

export const Title = () => (
    <a href="/">
    <img
    className="logo" 
    alt="logo" 
    src="https://lh3.googleusercontent.com/sU3hvImuHNhl26Q18p78-aerRDpVoQSy4QvCHxPPk2DqRAvAW5ZuU4T5_RLd7VO5omxedLv-xzirCPAV_qbW1rtSrRI3qWIDUP1kMa8M=w512-rw"
    />
    </a>
);

const Header = () => {
    // const title = "Food Villa"
   
    return(
        <div className="header">
            <Title />
           
             <div className="nav-items">
            <ul>
                <li>Home</li> 
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
        </div>
    );
};
export default Header;