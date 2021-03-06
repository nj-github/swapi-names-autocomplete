export class SwapiApi {
	axios: any = require('axios');
	baseUrl: string = 'https://www.swapi.co/api/people/'
	public async search(searchString: string): Promise<string[]> {
		if (searchString === '') {
			return Promise.resolve([]);
		}
		let searchResult = this.axios.get(this.baseUrl.concat('?search=').concat(searchString))
  		.then((response: any) => {
  			return response.data.results.map((r: any) => r.name);
  		})
  		.catch((error: any) => {
    		return ['An error occured: ' + error];
  		})
  		return searchResult;
	}
}