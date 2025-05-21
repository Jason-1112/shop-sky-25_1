const API_BASE_URL = "http://localhost:3000.api";

export async function fetchAllCategories() {

    const response = await fetch(`${API_BASE_URL}/categories`)
    const data = response.json();
    return data;
}//code for fetching categories