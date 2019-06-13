export class SwapiApi {
	axios: any = require('axios');
	baseUrl: string = 'https://www.swapi.co/api/people/'
	public async search(searchString: string): Promise<string[]> {
		let searchResult = this.axios.get(this.baseUrl.concat('?search=').concat(searchString))
  		.then((response: any) => {
    		return response.data.results;
  		})
  		.catch((error: any) => {
    		return ['An error occured: ' + error];
  		})
  		return searchResult;
	}
}