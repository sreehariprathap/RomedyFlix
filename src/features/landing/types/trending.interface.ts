export interface TrendingData {
        adult:             boolean;
        backdrop_path:     string;
        id:                number;
        title?:            string;
        original_language: OriginalLanguage;
        original_title?:   string;
        overview:          string;
        poster_path:       string;
        media_type:        MediaType;
        genre_ids:         number[];
        popularity:        number;
        release_date?:     Date;
        video?:            boolean;
        vote_average:      number;
        vote_count:        number;
        name?:             string;
        original_name?:    string;
        first_air_date?:   Date;
        origin_country?:   string[];
    }
    
    export enum MediaType {
        Movie = "movie",
        Tv = "tv",
    }
    
    export enum OriginalLanguage {
        En = "en",
        Ja = "ja",
    }
    