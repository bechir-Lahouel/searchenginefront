export async function fetchBooks() {
    const response = await fetch('https://gutendex.com/books');
    const data = await response.json();
    return data.results;
}
