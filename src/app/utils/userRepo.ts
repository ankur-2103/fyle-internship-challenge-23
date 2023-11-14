export interface UserRepo{
    name: string,
    description: string | null,
    topics: string[] | null,
    html_url: string
}