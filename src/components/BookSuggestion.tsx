interface BookProps {
    title: string;
    author: string;
    cover: string;
    subjects?: string[];
}

const BookSuggestion = ({ title, author, cover, subjects }: BookProps) => {
    return (
        <div className="book-card">
            <div
                className="book-cover"
                style={{ backgroundImage: `url(${cover})` }}
            ></div>
            <div className="book-details">
                <h3 className="book-title">{title}</h3>
                <p className="book-author">{author}</p>
                {subjects && subjects.length > 0 && (
                    <p className="book-subjects">{subjects.join(', ')}</p>
                )}
            </div>
        </div>
    );
};

export default BookSuggestion;
