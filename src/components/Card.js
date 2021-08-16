function Card(props) {
    const {
        Title,
        Year,
        imdbID,
        Type,
        Poster
    } = props;
    const text = Title.replace(/^a-z0-9 /i, '').replace(/\s/, '+');
    return (
        <div id={"movie-" + imdbID} className="card">
            <div className="card-image waves-effect waves-block waves-light">
                {Poster !== 'N/A' ? (
                    <img
                        className="activator"
                        src={Poster}
                        alt=""
                    />
                ) : (
                    <img
                        className="activator"
                        src={`https://via.placeholder.com/300x430.png?text=${text}`}
                        alt=""
                    />
                )}
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                    {Title}
                </span>
                <p>
                    <span>{Year}, {Type}</span>
                    <a
                        href="#"
                        className="right"
                        onClick={(event) => {
                            event.preventDefault(); props.readMoreHandler(imdbID)
                        }}
                    >Read more</a>
                </p>
            </div>
        </div>
    );
}

export default Card;