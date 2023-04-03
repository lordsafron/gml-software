export class CharacterDataWrapper {

    constructor(
        public code?: number,
        public status?: string,
        public copyright?: string,
        public attributionText?: string,
        public attributionHTML?: string,
        public data?: _CharacterDataContainer,
        public etag?: string
    ){}
    
}

interface _CharacterDataContainer {
    offset?: number,
    limit?: number,
    total?: number,
    count?: number,
    results: Character[]
}
    
export interface Character {
    id?: number,
    name?: string,
    description?: string,
    modified?: Date,
    resourceURI?: string,
    urls?: _Url[],
    thumbnail?: _Image,
    comics?: _ComicList,
    stories?: _StoryList,
    events?: _EventList,
    series?: _SeriesList
}

interface _Url {
    type?: string,
    url?: string
}

interface _Image {
    path?: string,
    extension?: string
}

interface _ComicList {
    available?: number,
    returned?: number,
    collectionURI?: string,
    items?: _ComicSummary[]
}

interface _ComicSummary {
    resourceURI?: string,
    name?: string
}

interface _StoryList {
    available?: number,
    returned?: number,
    collectionURI?: string,
    items?: _StorySummary[]
}

interface _StorySummary {
    resourceURI?: string,
    name?: string,
    type?: string
}

interface _EventList {
    available?: number,
    returned?: number,
    collectionURI?: string,
    items?: _EventSummary[]
}

interface _EventSummary {
    resourceURI?: string,
    name?: string
}

interface _SeriesList {
    available?: number,
    returned?: number,
    collectionURI?: string,
    items?: _SeriesSummary[]
}

interface _SeriesSummary {
    resourceURI?: string,
    name?: string
}