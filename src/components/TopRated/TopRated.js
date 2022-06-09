import './TopRated.css'
export default function TopRated() {
    const apiURL = "https://kitsu.io/api/edge/anime";

    function fetchBooks() {
        fetch(apiURL)
            .then(res => res.json())
            .then(data => {
                console.log(data);
            });
    }

    return (
        <div>

            <h2>Hello World</h2>
        </div>


    )
}