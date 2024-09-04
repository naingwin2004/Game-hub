import { useState, useEffect } from "react";
import apiClient from "../services/client-service.ts";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

interface PlatformResponse {
    count: number;
    results: Platform[];
}

const usePlatforms = () => {
    const [platforms, setPlatforms] = useState<Platform[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const controller = new AbortController();
        apiClient
            .get<PlatformResponse>("/platforms/lists/parents", {
                signal: controller.signal
            })
            .then(res => {
                setPlatforms(res.data.results);
                setLoading(false);
            })
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
            });
        return () => controller.abort();
    }, []);

    return { platforms, error, isLoading };
};

export default usePlatforms;
