import React, { useCallback, useContext, useEffect, useState } from "react";

const URL = "http://openlibrary.org/search.json?title="

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState("the lost world")
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [resultTitle, setResultTitle] = useState("");
    const fetchBooks = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(`${URL}${searchTerm}`);
            const data = await response.json();
            const { docs } = data;
            console.log(data)

            if (docs) {
                const newBooks = docs.slice(0, 20).map((bookSingle) => {
                    const { key, auther_name, cover_i, edition_count,
                        first_public_year, title } = bookSingle;
                    return {
                        id: key,
                        auther: auther_name,
                        cover_id: cover_i,
                        edition_count: edition_count,
                        first_public_year: first_public_year,
                        title: title
                    }
                });
                setBooks(newBooks);
                if (newBooks.length > 1) {
                    setResultTitle("your search result ")

                }
                else {
                    setResultTitle("No search Result Found!")
                }
            } else {
                setBooks([])
                setResultTitle("No Search result Found!")
            }
            setLoading(false)
        }
        catch (error) {
            // console.log(error)
            setLoading(false)
        }
    }, [searchTerm])
    useEffect(() => {
        fetchBooks();
    }, [searchTerm, fetchBooks])
    return (
        <AppContext.Provider value={{
            loading, books, setSearchTerm, resultTitle,
            setResultTitle
        }}>
            {children}
        </AppContext.Provider>
    )
}
export const useGlobalContext = () => {
    return useContext(AppContext)
}
export { AppContext, AppProvider };