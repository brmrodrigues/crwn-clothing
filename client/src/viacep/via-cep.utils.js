import axios from 'axios';

export const fetchCep = async (cep) => {
	return new Promise(
		(resolve, reject) => {
			axios({
				url: `http://viacep.com.br/ws/${cep}/json/`,
				method: 'get'
			}).then(response => resolve(convertResponseToAddress(response.data))
			).catch(error => reject(error))
		});
}

export const convertResponseToAddress = address => ({
	cep: address.cep,
	street: address.logradouro,
	district: address.bairro,
	city: address.localidade,
	state: address.uf
});
