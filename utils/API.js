const API_BASE_URL = "http://localhost:3000.api";

export async function fetchAllCategories() {

    const response = await fetch(`${API_BASE_URL}/categories`)//fetch allows to call the API and get data from database
    const data = response.json();//fetch first parameter is URL, second is object describing the characteristics
    return data;//component is a reusable interface
}//code for fetching categories