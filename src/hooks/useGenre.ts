import { useState, useEffect } from "react";
import apiClient from "../services/client-service.ts";
interface Genre {
    id: number;
    name: string;
    image_background: string;
}
interface GenreResponse {
    count: number;
    results: Genre[];
}
const useGenre = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const controller = new AbortController();
        apiClient
            .get<GenreResponse>("/genres", { signal: controller.signal })
            .then(res => {
                setGenres(res.data.results);
                setLoading(false);
            })
            .catch(err => {
                if (err instanceof CanceledError) return;
                setGenres(err.message);
                setLoading(false);
            });
        return () => controller.abort();
    }, []);
    return { genres, error, isLoading };
};
export default useGenre;
