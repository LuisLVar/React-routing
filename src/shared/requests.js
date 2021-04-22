import { apiUrl } from './API_URI';

export const fetchQuestions = () => {
    return fetch(apiUrl)
        .then(response => console.log(response.json()))
}