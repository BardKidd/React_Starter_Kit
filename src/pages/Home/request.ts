import ApiService from '@/utils/ApiService';

export const getRandomMeal = ApiService.get('https://www.themealdb.com/api/json/v1/1/random.php');
