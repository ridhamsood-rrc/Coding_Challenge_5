const getCorseOptions = () => {
    const isDevelopment: boolean = process.env.NODE_ENV === "development";

    if(isDevelopment) {
        return {
            origin: true,
            credentials: true
        };
    };

    return {
        origin: process.env.ALLOWED_ORIGINS?.split(",") || [],
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-type", "Authorization"]
    };
};

export default getCorseOptions;