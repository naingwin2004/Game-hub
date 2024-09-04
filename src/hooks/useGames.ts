import { useState, useEffect } from "react";
import apiClient from "../services/client-service.ts";
import { AxiosRequestConfig } from "axios";
import { Genre } from "../hooks/useGenre.ts";
//type check
export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
}

interface GameResponses {
    count: number;
    results: Game[];
}

const useGames = (
    selectedGenre: Genre | null,
    selectedPlatform: Platform | null,
    requestConfig?: AxiosRequestConfig
) => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const controller = new AbortController();
        apiClient
            .get<GameResponses>(
                "/games",
                { params: { genres: selectedGenre?.id ,platforms:selectedPlatform?.id} },
                { signal: controller.signal, ...requestConfig }
            )
            .then(res => {
                setGames(res.data.results);
                setLoading(false);
            })
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
            });

        return () => controller.abort();
    }, [selectedGenre,selectedPlatform]);

    return { games, error, isLoading };
};

export default useGames;
