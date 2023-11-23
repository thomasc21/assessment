import '../styles/Banner.css';

function Banner({title})
{
    return (
            <header>
                <h1 className='banner'>{title}</h1>
            </header>
    );
}
export default Banner;